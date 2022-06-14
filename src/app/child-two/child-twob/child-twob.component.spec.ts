import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwobComponent } from './child-twob.component';

describe('ChildTwobComponent', () => {
  let component: ChildTwobComponent;
  let fixture: ComponentFixture<ChildTwobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTwobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTwobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
