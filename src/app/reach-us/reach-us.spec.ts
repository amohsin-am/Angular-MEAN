import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachUs } from './reach-us';

describe('ReachUs', () => {
  let component: ReachUs;
  let fixture: ComponentFixture<ReachUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReachUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
