import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public fromValue: string = 'From Home Service';

  constructor() { }
}
