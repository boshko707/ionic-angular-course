import { Place } from './places.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    // eslint-disable-next-line max-len
    new Place(
      'p1',
      'Manhattan mansion',
      'In the heart of New York City.',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      149.99
      ),
    new Place(
      'p2',
      'L`amour Toujours',
      'A romantic place in Paris.',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      189.99
      ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      99.99
      )
  ];

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }

  constructor() { }
}
