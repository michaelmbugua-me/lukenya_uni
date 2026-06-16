import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-drawer.html',
  styleUrl: './side-drawer.css'
})
export class SideDrawerComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() subtitle = '';
  @Input() description = '';
  @Input() deanName = '';
  @Input() deanSubtitle = '';
  @Input() deanImage = '';
  @Input() paragraphs: string[] = [];
  @Input() salutation = '';
  @Input() deanTitle = '';

  @Output() close = new EventEmitter<void>();
  @Output() downloadBrochure = new EventEmitter<void>();
  @Output() viewFees = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      if (this.isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  onClose() {
    this.close.emit();
  }

  onDownloadBrochure() {
    this.downloadBrochure.emit();
  }

  onViewFees() {
    this.viewFees.emit();
  }
}
