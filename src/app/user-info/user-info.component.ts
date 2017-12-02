import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { Http } from "@angular/http";
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
    id: number;
    sub: Subscription;
     todoList:any=[];
  constructor(private route:ActivatedRoute,private http:Http) { }

  ngOnInit() {
    console.log("inside child component....");
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
    });
    console.log(this.id);
    this.getUserInfo(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getUserInfo(userId){
    let data = this.http.get('https://jsonplaceholder.typicode.com/todos?userId='+userId).subscribe(data => {
      console.log(data);
      console.log(data.text());
      this.todoList= JSON.parse(data.text());
      //console.log(todoList[0].id);
    },error =>{
      console.log(error);
    });
   

  }

}
