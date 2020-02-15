import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
declare const responsiveVoice;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  ItemName="";
  detailsresult: any;
  showtable=false;
  constructor(private apiService:ApiService ,private formBuilder: FormBuilder,private router: Router) { }
  RecipeForm: any;
  ngOnInit() {
  }
  Search(){
    responsiveVoice.speak(this.ItemName, "UK English Male", {volume: 1});
  this.apiService.displayDetails(this.ItemName)
      .subscribe( data => {
        this.detailsresult=data;
        this.showtable=true;
      });
      

}
}
