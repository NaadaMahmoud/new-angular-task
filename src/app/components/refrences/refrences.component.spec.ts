import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrencesComponent } from './refrences.component';

describe('RefrencesComponent', () => {
  let component: RefrencesComponent;
  let fixture: ComponentFixture<RefrencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefrencesComponent]
    });
    fixture = TestBed.createComponent(RefrencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
