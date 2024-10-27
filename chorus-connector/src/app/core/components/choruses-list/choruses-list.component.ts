import { Component, Input, OnInit } from '@angular/core';
import { ChorusListItemComponent } from '../chorus-list-item/chorus-list-item.component';
import { NgFor, NgForOf } from '@angular/common';
import { Choruses } from '../../models/chorus';
import { ChorusesService } from '../../services/choruses.service';

@Component({
  selector: 'app-choruses-list',
  templateUrl: './choruses-list.component.html',
  styleUrls: ['./choruses-list.component.scss'],
})
export class ChorusesListComponent implements OnInit {
  @Input() choruses?: Choruses;
  constructor(private choirService: ChorusesService) {
    this.choirService.getFilteredChoruses().subscribe((choruses) => {
      this.choruses = choruses;
    });
  }

  ngOnInit() {}
}
