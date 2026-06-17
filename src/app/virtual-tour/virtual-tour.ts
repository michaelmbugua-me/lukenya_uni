import { Component, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import 'pannellum/build/pannellum';

interface SceneHotspot {
  yaw: number;
  pitch: number;
  text: string;
  sceneId: string;
}

interface SceneConfig {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  hotspots: SceneHotspot[];
}

@Component({
  selector: 'app-virtual-tour',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './virtual-tour.html',
  styleUrl: './virtual-tour.css'
})
export class VirtualTourComponent implements AfterViewInit, OnDestroy {
  @ViewChild('viewerContainer') viewerContainer!: ElementRef<HTMLDivElement>;

  tourStarted = false;
  private viewer: any = null;
  currentSceneId = 'entrance';

  readonly scenes: SceneConfig[] = [
    {
      id: 'entrance',
      title: 'Main Entrance',
      subtitle: 'Welcome to Lukenya University',
      image: '/equirectangular/one.webp',
      hotspots: [
        { yaw: 60, pitch: -5, text: 'Go to Library', sceneId: 'library' },
        { yaw: 180, pitch: -5, text: 'Go to Campus Grounds', sceneId: 'grounds' },
        { yaw: -60, pitch: -5, text: 'Go to Recreation Centre', sceneId: 'recreation' },
      ]
    },
    {
      id: 'library',
      title: 'Library & Study Area',
      subtitle: 'Knowledge at your fingertips',
      image: '/equirectangular/two.webp',
      hotspots: [
        { yaw: -60, pitch: -5, text: 'Go to Main Entrance', sceneId: 'entrance' },
        { yaw: 60, pitch: -5, text: 'Go to Campus Grounds', sceneId: 'grounds' },
        { yaw: 180, pitch: -5, text: 'Go to Recreation Centre', sceneId: 'recreation' },
      ]
    },
    {
      id: 'grounds',
      title: 'Campus Grounds',
      subtitle: 'Explore our beautiful campus',
      image: '/equirectangular/three.webp',
      hotspots: [
        { yaw: -60, pitch: -5, text: 'Go to Main Entrance', sceneId: 'entrance' },
        { yaw: 60, pitch: -5, text: 'Go to Library', sceneId: 'library' },
        { yaw: 180, pitch: -5, text: 'Go to Recreation Centre', sceneId: 'recreation' },
      ]
    },
    {
      id: 'recreation',
      title: 'Recreation Centre',
      subtitle: 'Sports & student life',
      image: '/equirectangular/four.webp',
      hotspots: [
        { yaw: -60, pitch: -5, text: 'Go to Main Entrance', sceneId: 'entrance' },
        { yaw: 60, pitch: -5, text: 'Go to Library', sceneId: 'library' },
        { yaw: 180, pitch: -5, text: 'Go to Campus Grounds', sceneId: 'grounds' },
      ]
    }
  ];

  get currentScene(): SceneConfig | undefined {
    return this.scenes.find(s => s.id === this.currentSceneId);
  }

  ngAfterViewInit(): void {
    // Viewer is initialized when user clicks "Start Tour"
  }

  startTour(): void {
    this.tourStarted = true;

    setTimeout(() => {
      this.initViewer();
    }, 50);
  }

  private initViewer(): void {
    if (!this.viewerContainer?.nativeElement) return;

    const scenes: Record<string, any> = {};

    for (const scene of this.scenes) {
      scenes[scene.id] = {
        title: scene.title,
        panorama: scene.image,
        autoLoad: true,
        hotSpots: scene.hotspots.map(hs => ({
          pitch: hs.pitch,
          yaw: hs.yaw,
          type: 'scene',
          sceneId: hs.sceneId,
          text: hs.text,
          targetYaw: 'same',
          targetPitch: 'same',
        })),
      };
    }

    this.viewer = (window as any).pannellum.viewer(
      this.viewerContainer.nativeElement,
      {
        default: {
          firstScene: 'entrance',
          sceneFadeDuration: 800,
          autoLoad: true,
          autoRotate: -2,
          autoRotateInactivityDelay: 5000,
          compass: true,
          showZoomCtrl: true,
          showFullscreenCtrl: true,
          showControls: true,
          strings: {
            loadButtonLabel: 'Load Panorama',
            loadingLabel: 'Loading...',
          },
        },
        scenes,
      }
    );

    this.viewer.on('scenechange', (id: string) => {
      this.currentSceneId = id;
    });
  }

  exitTour(): void {
    if (this.viewer) {
      this.viewer.destroy();
      this.viewer = null;
    }
    this.tourStarted = false;
  }

  ngOnDestroy(): void {
    if (this.viewer) {
      this.viewer.destroy();
      this.viewer = null;
    }
  }
}
