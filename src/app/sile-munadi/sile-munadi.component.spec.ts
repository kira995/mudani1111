import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SileMunadiComponent } from './sile-munadi.component';

describe('SileMunadiComponent', () => {
  let component: SileMunadiComponent;
  let fixture: ComponentFixture<SileMunadiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SileMunadiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SileMunadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
