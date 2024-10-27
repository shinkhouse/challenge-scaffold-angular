import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyChorusesPage } from './my-choruses.page';

describe('MyChorusesPage', () => {
  let component: MyChorusesPage;
  let fixture: ComponentFixture<MyChorusesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChorusesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
