import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeHero } from './three-hero';

describe('ThreeHero', () => {
  let component: ThreeHero;
  let fixture: ComponentFixture<ThreeHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
