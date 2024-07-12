import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfootballAboutComponent } from './ifootball-about.component';

describe('IfootballAboutComponent', () => {
  let component: IfootballAboutComponent;
  let fixture: ComponentFixture<IfootballAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IfootballAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfootballAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
