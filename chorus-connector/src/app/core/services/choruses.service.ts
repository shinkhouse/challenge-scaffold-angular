
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ChorusData } from "../mock/choruses";
import { Choir, Choruses } from "../models/chorus";

@Injectable({
  providedIn: 'root',
})
export class ChorusesService {
  private choruses: Choruses;
  private searchTerm = new BehaviorSubject<string>('');
  private filteredChoruses = new Subject<Choruses>();

  constructor() {
    if(localStorage.getItem('choruses')) {
      this.choruses = JSON.parse(localStorage.getItem('choruses') as string);
    } else {
      this.choruses = ChorusData;
      localStorage.setItem('choruses', JSON.stringify(this.choruses));
    }

    this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(term => this.searchChoirs(term))
    ).subscribe(filtered => this.filteredChoruses.next(filtered));
  }

  getChoruses(): Choruses {
    return this.choruses;
  }

  searchChoirs(query: string): Choruses {
    return this.choruses.filter(
      (choir) =>
        choir.name.toLowerCase().includes(query.toLowerCase()) ||
        choir.location.city.toLowerCase().includes(query.toLowerCase())
    );
  }

  getChorusById(id: string): Choir | undefined {
    return this.choruses.find((chorus: Choir) => chorus.id === id);
  }

  updateChorusById(
    id: string,
    updatedChorus: Partial<Choir>
  ): Choir | undefined {
    const index = this.choruses.findIndex((chorus: Choir) => chorus.id === id);
    if (index !== -1) {
      this.choruses[index] = { ...this.choruses[index], ...updatedChorus };
      return this.choruses[index];
    }
    return undefined;
  }

  deleteChorusById(id: string): boolean {
    const index = this.choruses.findIndex((chorus: Choir) => chorus.id === id);
    if (index !== -1) {
      this.choruses.splice(index, 1);
      return true;
    }
    return false;
  }

  addChorus(newChorus: Choir): void {
    this.choruses.push(newChorus);
  }

  setSearchTerm(term: string): void {
    this.searchTerm.next(term);
  }

  getFilteredChoruses() {
    return this.filteredChoruses.asObservable();
  }
}
