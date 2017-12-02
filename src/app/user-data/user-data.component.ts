import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  showUserData: boolean = true;
  userdata: any = [];
  constructor(private http: Http, private router: Router) {
  }

  ngOnInit() {
    this.getallUserData();
  }

  openUserData(user: any) {
    console.log(user);
    console.log("inside data format...");
    this.router.navigate(['/user', user.id]);
    this.showUserData = false;
  }


  getallUserData() {
    let data = this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      console.log(JSON.stringify(data));
      let finalData = data.text();
      console.log(finalData)
      if (data) {
        this.userdata = JSON.parse(finalData);

        console.log(this.userdata);
      }
    }, error => {
      console.log(error);
    });

  }

}
