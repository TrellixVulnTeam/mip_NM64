import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  LeaderList = [];
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getList();
  }
  
  getList(){
    this.service.getAll().subscribe(data=>{
      this.LeaderList = data;
      console.log(this.LeaderList);
    });
  }
}
