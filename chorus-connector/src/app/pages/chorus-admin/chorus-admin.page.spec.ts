import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChorusAdminPage } from './chorus-admin.page';

describe('ChorusAdminPage', () => {
  let component: ChorusAdminPage;
  let fixture: ComponentFixture<ChorusAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChorusAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
