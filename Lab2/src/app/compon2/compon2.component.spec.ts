import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compon2Component } from './compon2.component';

describe('Compon2Component', () => {
  let component: Compon2Component;
  let fixture: ComponentFixture<Compon2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compon2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
