import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnebComponent } from './child-oneb.component';

describe('ChildOnebComponent', () => {
  let component: ChildOnebComponent;
  let fixture: ComponentFixture<ChildOnebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOnebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOnebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
