import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddChorusPage } from './add-chorus.page';

describe('AddChorusPage', () => {
  let component: AddChorusPage;
  let fixture: ComponentFixture<AddChorusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChorusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
