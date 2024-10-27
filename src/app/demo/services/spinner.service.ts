import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spinnerSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public spinnerState$ = this.spinnerSubject.asObservable();
  constructor() {}

  show() {
    this.spinnerSubject.next(true);
  }

  hide() {
    this.spinnerSubject.next(false);
  }
}
