import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtkComponent } from './gtk.component';

describe('GtkComponent', () => {
  let component: GtkComponent;
  let fixture: ComponentFixture<GtkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
