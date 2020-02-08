import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {FormBuilder, FormGroup, Validators, EmailValidator} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

	constructor(private formBuilder: FormBuilder,private router: Router,private apiService: ApiService) { }
	addForm: FormGroup;
	details:any;
	submitted = false;
	ngOnInit() {

		this.addForm = this.formBuilder.group({
		  CountryName: ['Kansas City', Validators.required],
		  CountryCode: ['MO', Validators.required]
		});
	
	  }
	  
	  get form()  { 
		  return this.addForm.controls; 
		}
	  onSubmit() {
		this.submitted = true;
		const data= JSON.stringify(this.addForm.value);
		this.router.navigate(['weatherDetails', {data:data}]);
	  }

	  onReset() {
        this.submitted = false;
        this.addForm.reset();
    }
}
