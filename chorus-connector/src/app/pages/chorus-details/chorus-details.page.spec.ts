import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChorusDetailsPage } from './chorus-details.page';

describe('ChorusDetailsPage', () => {
  let component: ChorusDetailsPage;
  let fixture: ComponentFixture<ChorusDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChorusDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
