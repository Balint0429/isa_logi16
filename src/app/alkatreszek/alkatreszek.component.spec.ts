import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkatreszekComponent } from './alkatreszek.component';

describe('AlkatreszekComponent', () => {
  let component: AlkatreszekComponent;
  let fixture: ComponentFixture<AlkatreszekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlkatreszekComponent]
    });
    fixture = TestBed.createComponent(AlkatreszekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
