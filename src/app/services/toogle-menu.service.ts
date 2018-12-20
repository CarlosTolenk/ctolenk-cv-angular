import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToogleMenuService {

  dataStatus = new EventEmitter();

  constructor() { }

  sendToggle(data: string) {
    this.dataStatus.emit(data);
  }
}
