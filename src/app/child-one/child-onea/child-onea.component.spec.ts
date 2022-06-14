import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOneaComponent } from './child-onea.component';

describe('ChildOneaComponent', () => {
  let component: ChildOneaComponent;
  let fixture: ComponentFixture<ChildOneaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOneaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
