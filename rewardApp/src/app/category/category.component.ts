import { Component, OnInit, Input} from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() index1: number;
  @Input() categoryArray;
  masterArr: Array<any> = []
   
   constructor(private mainService: MainService) {
   }

  ngOnInit() {
    this.masterArr = this.mainService.masterData
  }



  // call method which allow drop 
  onAllowDrop(e: any) {
     e.preventDefault();
  }

  // call method  on drop
  onDrop(e: any) {
    let data = JSON.parse(e.dataTransfer.getData("text"))
    /*
    *** service will take two param 1) {id: 1, name: "R1", parent: "C0"} and 
    drop location which is new drop locagtion 
    */
    this.mainService.setdata(data, 'C'+e.target.id); 
  }

  //category drag
  drag(event:any, value:any) {
  //value is an object {id: 1, name: "R1", parent: "C0"}
    event.dataTransfer.setData("text", JSON.stringify(value));
  }

  // on Delete button filter items
  onClickButton(item) {
    this.mainService.removeData(item);
  }

}
