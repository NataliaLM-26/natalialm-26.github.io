import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperienceComponent } from './work_experience.component';

describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExperienceComponent]
    });
    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
