import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonaComponent } from './sona.component';

describe('SonaComponent', () => {
  let component: SonaComponent;
  let fixture: ComponentFixture<SonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
