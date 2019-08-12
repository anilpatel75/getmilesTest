import { Component, OnInit, DoCheck } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.css']
})
export class CategoryContainerComponent implements OnInit, DoCheck {

  arr: Array<number> = [1, 2, 3, 4, 5];
  getArray:Array<any> = [];

  constructor(private mainService: MainService){}

  ngOnInit() {
    this.getArray = this.mainService.masterData;
  }

  ngDoCheck(){
    this.getArray = this.mainService.masterData;
  }
  
  getMyArray(parent){
    return this.getArray.filter((item)=>{
      return Number(item.parent.split('')[1]) == parent;
    })
  }

}
