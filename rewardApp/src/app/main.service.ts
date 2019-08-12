import { Injectable } from '@angular/core';
import uuid from 'uuid/v1'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  masterData: any = [];
  constructor() { }

  //
  setdata(obj, placeToDrop) {
    if (obj.parent === 'reward') {
      obj.parent = placeToDrop
      obj.delete = uuid()
      this.masterData.push(obj)
    } else {
      this.masterData = this.masterData.filter((item) => {
        return item.delete !== obj.delete
      })
      obj.parent = placeToDrop
      obj.delete = uuid()
      this.masterData.push(obj)
    }
    return this.masterData;
  }


  // delete Reward In Categories.
  removeData(obj) {
    this.masterData = this.masterData.filter((item) => {
      return item.delete !== obj.delete
    })
  }
}
