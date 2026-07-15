# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> Home page >> page title is correct
- Location: tests/home.spec.ts:101:7

# Error details

```
Error: Channel closed
```

```
Error: page.goto: Test ended.
Call log:
  - navigating to "http://localhost:4300/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e6]:
          - generic [ref=e7]: ☎
          - generic [ref=e8]: 0722 370 485
        - generic [ref=e9]:
          - generic [ref=e10]: ✉
          - generic [ref=e11]: info@lukenyauniversity.ac.ke
      - navigation "Utility navigation" [ref=e12]:
        - link "Library" [ref=e13] [cursor=pointer]:
          - /url: https://library.lukenyauniversity.ac.ke/
        - link "Students" [ref=e14] [cursor=pointer]:
          - /url: https://lu.mzizi.co.ke/ISIMSLogin.aspx
        - link "Staff & Faculty" [ref=e15] [cursor=pointer]:
          - /url: "#"
        - link "Quick Links" [ref=e16] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e18]:
      - link "Lukenya University home" [ref=e19] [cursor=pointer]:
        - /url: /
        - generic [ref=e20]: LUKENYA
        - img "Lukenya Logo" [ref=e21]
        - generic [ref=e22]: UNIVERSITY
      - navigation "Primary navigation" [ref=e23]:
        - link "Home" [ref=e24] [cursor=pointer]:
          - /url: /
        - link "About" [ref=e25] [cursor=pointer]:
          - /url: /about
        - link "Academics" [ref=e27] [cursor=pointer]:
          - /url: /academics
          - generic [ref=e28]: Academics
        - link "Student" [ref=e31] [cursor=pointer]:
          - /url: /campus-life-overview
          - generic [ref=e32]: Student
        - link "Graduations" [ref=e34] [cursor=pointer]:
          - /url: /graduation
        - link "Research" [ref=e35] [cursor=pointer]:
          - /url: "#"
        - link "Contact" [ref=e36] [cursor=pointer]:
          - /url: /contact
      - link "Apply Now" [ref=e38] [cursor=pointer]:
        - /url: /application-overview
  - main [ref=e40]:
    - region "Shape the Future of Tomorrow." [ref=e42]:
      - img "Graduating students celebrating on campus" [ref=e43]
      - generic [ref=e45]:
        - paragraph [ref=e46]: • EST. 1991 • EXCELLENCE IN EDUCATION
        - heading "Shape the Future of Tomorrow." [level=1] [ref=e47]:
          - generic [ref=e48]:
            - text: Shape the Future of
            - generic [ref=e49]: Tomorrow.
        - paragraph [ref=e50]: For over the years, Lukenya University has shaped visionary leaders.
        - generic [ref=e51]:
          - link "Apply for 2026" [ref=e52] [cursor=pointer]:
            - /url: /application-overview
          - link "Explore Programs" [ref=e53] [cursor=pointer]:
            - /url: /academics
        - generic "Highlights" [ref=e54]:
          - generic [ref=e55]:
            - strong [ref=e56]: 10+
            - generic [ref=e57]: YEARS OF EXCELLENCE
          - generic [ref=e58]:
            - strong [ref=e59]: 10+
            - generic [ref=e60]: ACADEMIC PROGRAMS
          - generic [ref=e61]:
            - strong [ref=e62]: 1000+
            - generic [ref=e63]: ENROLLED STUDENTS
    - region "Campus overview" [ref=e64]:
      - generic [ref=e65]:
        - generic [ref=e66]:
          - heading "CAMPUS" [level=2] [ref=e67]
          - paragraph [ref=e68]: Our campus is located in a serene environment.
          - link "University Overview" [ref=e69] [cursor=pointer]:
            - /url: /about
        - img "Aerial view of Lukenya University campus" [ref=e70]
    - generic [ref=e71]:
      - generic [ref=e72]:
        - heading "STUDYING AT Lukenya University" [level=2] [ref=e73]:
          - text: STUDYING
          - text: AT Lukenya University
        - paragraph [ref=e74]: We offer a diverse range of programs.
      - generic [ref=e75]: Your browser does not support the video tag.
      - generic [ref=e76]:
        - article [ref=e77]:
          - heading "Undergraduate" [level=3] [ref=e78]
          - paragraph [ref=e79]:
            - text: Lukenya University offers a diverse range of undergraduate programs designed to prepare students for global careers and leadership in various fields.
            - strong [ref=e80]: We offer 19 undergraduate programs
            - text: in total.
          - heading "Mode of Study" [level=4] [ref=e81]
          - paragraph [ref=e82]: ◷ Online + On Campus
          - paragraph [ref=e83]: We offer 2 courses fully online and 17 delivered on campus.
          - link "View Programs" [ref=e84] [cursor=pointer]:
            - /url: /academics
        - article [ref=e85]:
          - heading "Master's" [level=3] [ref=e86]
          - paragraph [ref=e87]:
            - text: Advance your career with Lukenya University's masters programs. We offer
            - strong [ref=e88]: 19 Master's degree programs
            - text: across business, technology, health, and social sciences — designed for real-world impact.
          - heading "Mode of Study" [level=4] [ref=e89]
          - paragraph [ref=e90]: ◷ Online + On Campus
          - paragraph [ref=e91]: We offer 14 courses on campus and 5 offered fully online.
          - link "View Programs" [ref=e92] [cursor=pointer]:
            - /url: /academics
        - article [ref=e93]:
          - heading "Doctorate" [level=3] [ref=e94]
          - paragraph [ref=e95]:
            - text: Advance your academic and professional journey with Lukenya University's doctorate programs. We offer
            - strong [ref=e96]: 4 doctoral degrees across business, technology and social sciences
            - text: — designed to drive original research, leadership, and real-world impact.
          - heading "Mode of Study" [level=4] [ref=e97]
          - paragraph [ref=e98]: ◷ Online + On Campus
          - paragraph [ref=e99]: We offer 4 courses on campus
          - link "View Programs" [ref=e100] [cursor=pointer]:
            - /url: /academics
    - generic [ref=e101]:
      - generic [ref=e102]:
        - heading "Academic Programs" [level=2] [ref=e103]
        - generic [ref=e104]:
          - img [ref=e105]
          - img [ref=e106] [cursor=pointer]
      - generic [ref=e108]:
        - article [ref=e109]:
          - img "School of Business" [ref=e110]
          - heading "School of Business" [level=3] [ref=e111]
          - paragraph [ref=e113]: Leading business education
        - article [ref=e114]:
          - img "School of Engineering" [ref=e115]
          - heading "School of Engineering" [level=3] [ref=e116]
          - paragraph [ref=e118]: Innovative engineering programs
        - article [ref=e119]:
          - img "School of Health Sciences" [ref=e120]
          - heading "School of Health Sciences" [level=3] [ref=e121]
          - paragraph [ref=e123]: Health sciences programs
        - article [ref=e124]:
          - img "School of Law" [ref=e125]
          - heading "School of Law" [level=3] [ref=e126]
          - paragraph [ref=e128]: Comprehensive legal education
    - generic [ref=e132]:
      - generic [ref=e133]:
        - heading "Experience Campus Life" [level=2] [ref=e134]
        - paragraph [ref=e135]: Lukenya University has an active leisure and recreation portfolio which students find exciting. We believe that your education goes well beyond your coursework and degree from Lukenya University, for we believe in holistic education.
      - generic [ref=e136]:
        - article [ref=e137]:
          - img "Modern Library" [ref=e138]
          - generic [ref=e139]:
            - text: "01"
            - paragraph [ref=e140]: OVERVIEW
            - heading "Modern Library" [level=3] [ref=e141]
            - paragraph [ref=e142]: State-of-the-art library
        - article [ref=e143]:
          - img "Sports Complex" [ref=e144]
          - generic [ref=e145]:
            - text: "02"
            - paragraph [ref=e146]: OVERVIEW
            - heading "Sports Complex" [level=3] [ref=e147]
            - paragraph [ref=e148]: World-class sports facilities
        - article [ref=e149]:
          - img "Student Accommodation" [ref=e150]
          - generic [ref=e151]:
            - text: "03"
            - paragraph [ref=e152]: ACCOMMODATION
            - heading "Student Accommodation" [level=3] [ref=e153]
            - paragraph [ref=e154]: Comfortable living spaces
      - link "Explore Campus Life" [ref=e155] [cursor=pointer]:
        - /url: /campus-life-overview
    - generic [ref=e158]:
      - heading "Scholarship Programs" [level=2] [ref=e159]
      - paragraph [ref=e160]: Lukenya University offers a variety of scholarships, grants, and work-study opportunities to help students finance their education and achieve their academic goals.
      - link "Financial Aid →" [ref=e161] [cursor=pointer]:
        - /url: /contact
        - text: Financial Aid
        - generic [ref=e162]: →
    - generic [ref=e163]:
      - generic [ref=e164]:
        - heading "News & Updates at Lukenya University" [level=2] [ref=e165]
        - paragraph [ref=e166]: Get the latest updates about Lukenya University and be part of the growing community within Lukenya University and beyond
      - generic [ref=e167]:
        - article [ref=e168]:
          - img "University Wins Award" [ref=e169]
        - generic [ref=e170]:
          - article [ref=e171] [cursor=pointer]:
            - img "University Wins Award" [ref=e172]
            - generic [ref=e173]:
              - heading "University Wins Award" [level=3] [ref=e174]
              - paragraph [ref=e175]: Prestigious award win
              - link "Read More →" [ref=e176]:
                - /url: https://example.com/news/1
                - text: Read More
                - generic [ref=e177]: →
          - article [ref=e178] [cursor=pointer]:
            - img "New Program Launch" [ref=e179]
            - generic [ref=e180]:
              - heading "New Program Launch" [level=3] [ref=e181]
              - paragraph [ref=e182]: Data science program announced
          - article [ref=e183] [cursor=pointer]:
            - img "Research Breakthrough" [ref=e184]
            - generic [ref=e185]:
              - heading "Research Breakthrough" [level=3] [ref=e186]
              - paragraph [ref=e187]: Renewable energy breakthrough
              - link "Read More →" [ref=e188]:
                - /url: https://example.com/news/3
                - text: Read More
                - generic [ref=e189]: →
      - link "View All Events" [ref=e190] [cursor=pointer]:
        - /url: /news
    - generic [ref=e191]:
      - img "Lukenya University graduate" [ref=e192]
      - heading "Are you ready to take the next step toward your future career?" [level=2] [ref=e194]
      - generic [ref=e195]:
        - link "Application Form" [ref=e196] [cursor=pointer]:
          - /url: /application-overview
        - generic [ref=e197]:
          - link "Virtual Tour" [ref=e198] [cursor=pointer]:
            - /url: /virtual-tour
          - link "Programs" [ref=e199] [cursor=pointer]:
            - /url: /academics
    - button "Scroll to top" [ref=e200] [cursor=pointer]: ↑
  - contentinfo [ref=e202]:
    - generic [ref=e203]:
      - link [ref=e204] [cursor=pointer]:
        - /url: /
      - paragraph [ref=e205]: Since 1991, Lukenya University has been committed to excellence in education, research, and community engagement. We prepare students to become leaders who make a positive impact on the world.
      - generic "Social links" [ref=e206]:
        - generic [ref=e207]: "Follow us:"
        - link "Instagram" [ref=e208] [cursor=pointer]:
          - /url: https://www.instagram.com/lukenyauniversity
          - img [ref=e209]
        - link "X" [ref=e210] [cursor=pointer]:
          - /url: https://x.com/lukenyauni
          - img [ref=e211]
        - link "Facebook" [ref=e212] [cursor=pointer]:
          - /url: https://web.facebook.com/Lukenyauniversity
          - img [ref=e213]
        - link "YouTube" [ref=e214] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCtLaFZS5yU4Ih6uG65AVutg
          - img [ref=e215]
    - navigation "Quick links" [ref=e216]:
      - heading "Quick Links" [level=3] [ref=e217]
      - link "About Us" [ref=e218] [cursor=pointer]:
        - /url: /about
      - link "Academics" [ref=e219] [cursor=pointer]:
        - /url: /academics
      - link "Campus Life" [ref=e220] [cursor=pointer]:
        - /url: /campus-life-overview
      - link "LU Application Form" [ref=e221] [cursor=pointer]:
        - /url: /application-form
      - link "Library" [ref=e222] [cursor=pointer]:
        - /url: https://library.lukenyauniversity.ac.ke/
      - link "Research" [ref=e223] [cursor=pointer]:
        - /url: https://research.lukenyauniversity.ac.ke/
    - navigation "Academics links" [ref=e224]:
      - heading "Academics" [level=3] [ref=e225]
      - link "School of Agriculture, Technical Studies and Natural Sciences" [ref=e226] [cursor=pointer]:
        - /url: /academics/schools/agriculture-natural-sciences
      - link "School of Business & Economics" [ref=e227] [cursor=pointer]:
        - /url: /academics/schools/business-economics
      - link "School of Education & Social Sciences" [ref=e228] [cursor=pointer]:
        - /url: /academics/schools/education-social-sciences
      - link "School of Health" [ref=e229] [cursor=pointer]:
        - /url: /academics/schools/health-sciences
      - link "Short Courses" [ref=e230] [cursor=pointer]:
        - /url: /academics/short-courses
    - navigation "Student links" [ref=e231]:
      - heading "Students" [level=3] [ref=e232]
      - link "Student Portal" [ref=e233] [cursor=pointer]:
        - /url: https://lu.mzizi.co.ke/ISIMSLogin.aspx
      - link "Student Handbook" [ref=e234] [cursor=pointer]:
        - /url: "#"
      - link "Graduation" [ref=e235] [cursor=pointer]:
        - /url: /graduation
      - link "Cultural Week Festival" [ref=e236] [cursor=pointer]:
        - /url: /campus-culture-week
    - generic [ref=e237]:
      - generic [ref=e238]:
        - img [ref=e239]
        - text: Mtito Andei, Makueni County
      - generic [ref=e241]:
        - img [ref=e242]
        - text: 0790-444000 or 0791-444000
      - generic [ref=e244]:
        - img [ref=e245]
        - text: info@lukenyauniversity.ac.ke
    - generic [ref=e247]: Copyright All Right Reserved 2026. Lukenya University
```

# Test source

```ts
  1   | import { test, expect, type Page } from '@playwright/test';
  2   | 
  3   | const mockHomePage = [
  4   |   {
  5   |     id: 1,
  6   |     title: { rendered: 'Home' },
  7   |     slug: 'home',
  8   |     content: { rendered: '' },
  9   |     acf: {
  10  |       hero_headline: 'Shape the Future of Tomorrow.',
  11  |       hero_subtext: 'For over the years, Lukenya University has shaped visionary leaders.',
  12  |       hero_image: '/home/hero.webp',
  13  |       hero_cta_label: 'Apply for 2026',
  14  |       hero_cta_url: '/application-overview',
  15  |       hero_cta_secondary_label: 'Explore Programs',
  16  |       hero_cta_secondary_url: '/academics',
  17  |       stat_programmes: '10+',
  18  |       stat_students: '1000+',
  19  |       campus_title: 'CAMPUS',
  20  |       campus_description: 'Our campus is located in a serene environment.',
  21  |       campus_image: '/home/below_hero.webp',
  22  |       campus_link_label: 'University Overview',
  23  |       campus_link_url: '/about',
  24  |       studying_intro: 'We offer a diverse range of programs.',
  25  |     },
  26  |   },
  27  | ];
  28  | 
  29  | const mockSchools = [
  30  |   {
  31  |     id: 1, title: { rendered: 'School of Business' }, slug: 'school-of-business',
  32  |     acf: { description: 'Leading business education', image: '/home/sob.webp', dean_name: '', dean_title: '', dean_subtitle: '', dean_salutation: '', dean_message: '', dean_image: '', hero_title_prefix: '', hero_title_highlight: '', hero_title_suffix: '', hero_description: '', hero_image: '', hero_pill_text: '', hero_pill_icon_url: '' },
  33  |   },
  34  |   {
  35  |     id: 2, title: { rendered: 'School of Engineering' }, slug: 'school-of-engineering',
  36  |     acf: { description: 'Innovative engineering programs', image: '/home/sob.webp', dean_name: '', dean_title: '', dean_subtitle: '', dean_salutation: '', dean_message: '', dean_image: '', hero_title_prefix: '', hero_title_highlight: '', hero_title_suffix: '', hero_description: '', hero_image: '', hero_pill_text: '', hero_pill_icon_url: '' },
  37  |   },
  38  |   {
  39  |     id: 3, title: { rendered: 'School of Health Sciences' }, slug: 'school-of-health',
  40  |     acf: { description: 'Health sciences programs', image: '/home/sob.webp', dean_name: '', dean_title: '', dean_subtitle: '', dean_salutation: '', dean_message: '', dean_image: '', hero_title_prefix: '', hero_title_highlight: '', hero_title_suffix: '', hero_description: '', hero_image: '', hero_pill_text: '', hero_pill_icon_url: '' },
  41  |   },
  42  |   {
  43  |     id: 4, title: { rendered: 'School of Law' }, slug: 'school-of-law',
  44  |     acf: { description: 'Comprehensive legal education', image: '/home/sob.webp', dean_name: '', dean_title: '', dean_subtitle: '', dean_salutation: '', dean_message: '', dean_image: '', hero_title_prefix: '', hero_title_highlight: '', hero_title_suffix: '', hero_description: '', hero_image: '', hero_pill_text: '', hero_pill_icon_url: '' },
  45  |   },
  46  | ];
  47  | 
  48  | const mockCampusLife = [
  49  |   {
  50  |     id: 1, title: { rendered: 'Modern Library' },
  51  |     acf: { description: 'State-of-the-art library', image: '/home/world_class_facilities.webp', category: 'overview' },
  52  |   },
  53  |   {
  54  |     id: 2, title: { rendered: 'Sports Complex' },
  55  |     acf: { description: 'World-class sports facilities', image: '/home/world_class_facilities.webp', category: 'overview' },
  56  |   },
  57  |   {
  58  |     id: 3, title: { rendered: 'Student Accommodation' },
  59  |     acf: { description: 'Comfortable living spaces', image: '/home/world_class_facilities.webp', category: 'accommodation' },
  60  |   },
  61  | ];
  62  | 
  63  | const mockNews = [
  64  |   {
  65  |     id: 1, date: '2024-01-15', title: { rendered: 'University Wins Award' },
  66  |     acf: { image: '/home/news.webp', description: 'Prestigious award win', category: 'achievements', featured: true, link_url: 'https://example.com/news/1' },
  67  |   },
  68  |   {
  69  |     id: 2, date: '2024-01-10', title: { rendered: 'New Program Launch' },
  70  |     acf: { image: '/home/news.webp', description: 'Data science program announced', category: 'academics', link_url: '' },
  71  |   },
  72  |   {
  73  |     id: 3, date: '2024-01-05', title: { rendered: 'Research Breakthrough' },
  74  |     acf: { image: '/home/news.webp', description: 'Renewable energy breakthrough', category: 'research', link_url: 'https://example.com/news/3' },
  75  |   },
  76  | ];
  77  | 
  78  | async function mockWpApi(page: Page) {
  79  |   await page.route('**/wp-json/wp/v2/pages?slug=home', async (route) => {
  80  |     await route.fulfill({ json: mockHomePage });
  81  |   });
  82  |   await page.route('**/wp-json/wp/v2/school', async (route) => {
  83  |     await route.fulfill({ json: mockSchools });
  84  |   });
  85  |   await page.route('**/wp-json/wp/v2/campus_life*', async (route) => {
  86  |     await route.fulfill({ json: mockCampusLife });
  87  |   });
  88  |   await page.route('**/wp-json/wp/v2/news*', async (route) => {
  89  |     await route.fulfill({ json: mockNews });
  90  |   });
  91  | }
  92  | 
  93  | test.beforeEach(async ({ page }) => {
  94  |   await mockWpApi(page);
> 95  |   await page.goto('/');
      |              ^ Error: page.goto: Test ended.
  96  |   await page.waitForSelector('app-home', { timeout: 15_000 });
  97  | });
  98  | 
  99  | test.describe('Home page', () => {
  100 | 
  101 |   test('page title is correct', async ({ page }) => {
  102 |     await expect(page).toHaveTitle('Lukenya University');
  103 |   });
  104 | 
  105 |   test('hero section renders with all elements', async ({ page }) => {
  106 |     await expect(page.getByText('EST. 1991')).toBeVisible();
  107 |     await expect(page.getByText('YEARS OF EXCELLENCE')).toBeVisible();
  108 |     await expect(page.getByText('ACADEMIC PROGRAMS', { exact: true })).toBeVisible();
  109 |     await expect(page.getByText('ENROLLED STUDENTS')).toBeVisible();
  110 | 
  111 |     const applyButton = page.getByRole('link', { name: /apply for 2026/i });
  112 |     await expect(applyButton).toBeVisible();
  113 |     await expect(applyButton).toHaveAttribute('href', '/application-overview');
  114 | 
  115 |     const exploreButton = page.getByRole('link', { name: /explore programs/i });
  116 |     await expect(exploreButton).toBeVisible();
  117 |     await expect(exploreButton).toHaveAttribute('href', '/academics');
  118 |   });
  119 | 
  120 |   test('campus overview section renders', async ({ page }) => {
  121 |     const campusSection = page.locator('.campus-intro');
  122 |     await expect(campusSection).toBeVisible();
  123 | 
  124 |     await expect(campusSection.getByRole('heading', { name: /campus/i })).toBeVisible();
  125 |     await expect(campusSection.getByText('Our campus is located in a serene environment.')).toBeVisible();
  126 | 
  127 |     const overviewLink = campusSection.getByRole('link', { name: /university overview/i });
  128 |     await expect(overviewLink).toBeVisible();
  129 |     await expect(overviewLink).toHaveAttribute('href', '/about');
  130 |   });
  131 | 
  132 |   test('study section renders video and program cards', async ({ page }) => {
  133 |     const studySection = page.locator('.study');
  134 |     await expect(studySection).toBeVisible();
  135 | 
  136 |     await expect(studySection.getByRole('heading', { name: /studying at lukenya university/i })).toBeVisible();
  137 | 
  138 |     const video = studySection.locator('video');
  139 |     await expect(video).toBeVisible();
  140 |     await expect(video).toHaveAttribute('controls');
  141 | 
  142 |     for (const level of ['Undergraduate', "Master's", 'Doctorate']) {
  143 |       await expect(studySection.getByRole('heading', { name: level })).toBeVisible();
  144 |     }
  145 | 
  146 |     const viewProgramsButtons = await studySection.getByRole('link', { name: /view programs/i }).all();
  147 |     expect(viewProgramsButtons.length).toBe(3);
  148 |     for (const btn of viewProgramsButtons) {
  149 |       await expect(btn).toHaveAttribute('href', '/academics');
  150 |     }
  151 |   });
  152 | 
  153 |   test('academic programs slider displays schools and supports navigation', async ({ page }) => {
  154 |     const programsSection = page.locator('.programs');
  155 |     await expect(programsSection).toBeVisible();
  156 |     await expect(programsSection.getByRole('heading', { name: /academic programs/i })).toBeVisible();
  157 | 
  158 |     for (const school of mockSchools) {
  159 |       await expect(programsSection.getByText(school.title.rendered)).toBeVisible();
  160 |     }
  161 | 
  162 |     const prevArrow = programsSection.locator('img[alt="Previous programs"]');
  163 |     const nextArrow = programsSection.locator('img[alt="Next programs"]');
  164 | 
  165 |     await expect(prevArrow).toHaveClass(/disabled/);
  166 |     await expect(nextArrow).not.toHaveClass(/disabled/);
  167 | 
  168 |     const dots = programsSection.locator('.slider-dots span');
  169 |     await expect(dots).toHaveCount(2);
  170 |     await expect(dots.first()).toHaveClass(/active/);
  171 |     await expect(dots.nth(1)).not.toHaveClass(/active/);
  172 | 
  173 |     await nextArrow.click();
  174 |     await page.waitForTimeout(300);
  175 | 
  176 |     await expect(prevArrow).not.toHaveClass(/disabled/);
  177 |     await expect(nextArrow).toHaveClass(/disabled/);
  178 |     await expect(dots.first()).not.toHaveClass(/active/);
  179 |     await expect(dots.nth(1)).toHaveClass(/active/);
  180 | 
  181 |     await prevArrow.click();
  182 |     await page.waitForTimeout(300);
  183 | 
  184 |     await expect(prevArrow).toHaveClass(/disabled/);
  185 |     await expect(dots.first()).toHaveClass(/active/);
  186 |   });
  187 | 
  188 |   test('campus life section renders', async ({ page }) => {
  189 |     const campusLifeSection = page.locator('.campus-life');
  190 |     await expect(campusLifeSection).toBeVisible();
  191 |     await expect(campusLifeSection.getByRole('heading', { name: /experience campus life/i })).toBeVisible();
  192 | 
  193 |     for (const item of mockCampusLife) {
  194 |       await expect(campusLifeSection.getByText(item.title.rendered)).toBeVisible();
  195 |     }
```