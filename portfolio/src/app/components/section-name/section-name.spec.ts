import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionName } from './section-name';

describe('SectionName', () => {
  let component: SectionName;
  let fixture: ComponentFixture<SectionName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
