import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoaComponent } from './child-twoa.component';

describe('ChildTwoaComponent', () => {
  let component: ChildTwoaComponent;
  let fixture: ComponentFixture<ChildTwoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTwoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTwoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
