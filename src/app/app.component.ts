import { Component, OnInit } from '@angular/core';
import { MongoService } from './mongo.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listeUser: any;
  listeProduct: any;

  constructor(private mongoService: MongoService){}

  ngOnInit(){
    this.mongoService.recupAllProduct().subscribe(data=>{
      this.listeProduct = data;
      console.log(data);
    });

    this.mongoService.recupAllUser().subscribe(data=>{
      this.listeUser = data;
      console.log(data);
    });

  }
  
}
