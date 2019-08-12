import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  rewardArr = [
    {
      id: 1,
      name: "R1"
    },
    {
      id: 2,
      name: "R2"
    },
    {
      id: 3,
      name: "R3"
    },
    {
      id: 4,
      name: "R4"
    },
    {
      id: 5,
      name: "R5"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  drag(event:any) {
    let sampleData = this.rewardArr[event.target.id - 1];

    let sampleData1 = {
      id: sampleData.id,
      name: sampleData.name,
      parent:'reward'
    }
    event.dataTransfer.setData("text", JSON.stringify(sampleData1));

  }

}
