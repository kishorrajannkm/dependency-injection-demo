import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class AnyService {

  public anyServiceValue: string = 'From Any Service';

  constructor() { }
}
