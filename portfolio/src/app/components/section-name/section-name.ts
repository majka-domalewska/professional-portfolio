import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-name',
  imports: [],
  templateUrl: './section-name.html',
  styleUrl: './section-name.css',
})
export class SectionName {

  section: string = '';
  link: string = '';

  @Input()
  set sectionInput(value: string) {
    this.section = value;
    // console.log('Section set to:', this.section);
  }

  @Input()
  set linkInput(value: string | undefined) {
    this.link = value || '';
    if (value) {
      // console.log('Link set to:', this.link);
    }
  }
}
