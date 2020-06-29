import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTreeComponentComponent } from './angular-tree-component.component';

describe('AngularTreeComponentComponent', () => {
  let component: AngularTreeComponentComponent;
  let fixture: ComponentFixture<AngularTreeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTreeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
