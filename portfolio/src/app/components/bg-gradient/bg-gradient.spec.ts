import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgGradient } from './bg-gradient';

describe('BgGradient', () => {
  let component: BgGradient;
  let fixture: ComponentFixture<BgGradient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgGradient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgGradient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
