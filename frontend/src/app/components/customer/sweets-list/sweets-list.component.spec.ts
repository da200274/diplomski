import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsListComponent } from './sweets-list.component';

describe('SweetsListComponent', () => {
  let component: SweetsListComponent;
  let fixture: ComponentFixture<SweetsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweetsListComponent]
    });
    fixture = TestBed.createComponent(SweetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
