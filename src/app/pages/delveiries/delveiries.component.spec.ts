import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelveiriesComponent } from './delveiries.component';

describe('DelveiriesComponent', () => {
  let component: DelveiriesComponent;
  let fixture: ComponentFixture<DelveiriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelveiriesComponent]
    });
    fixture = TestBed.createComponent(DelveiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
