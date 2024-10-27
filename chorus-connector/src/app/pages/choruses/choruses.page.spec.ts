import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChorusesPage } from './choruses.page';

describe('ChorusesPage', () => {
  let component: ChorusesPage;
  let fixture: ComponentFixture<ChorusesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChorusesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
