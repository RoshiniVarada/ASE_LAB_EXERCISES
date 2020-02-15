import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, EmailValidator, FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginError: boolean;
  enterDetailsError=false;
  jsontypedata: {
    UserName: string;
    Password: string;
    RetypePswd:string
}[]
  no_loop=false;
  userAlreadyexist=false;
  loop_ended=false;
  loginErrorUsename=false;
  loginErrorPswd: boolean;
 

  constructor(private formBuilder: FormBuilder,private router: Router) { }
	LoginForm: FormGroup;
  details:any;
  data:any;
  submitted = false;
  show=false;
  jsondata:any;
  users:any;
	ngOnInit() {

		this.LoginForm = this.formBuilder.group({
     UserName:['',Validators.required],
      Password: ['', Validators.required]
    }, {
        //validator: MustMatch('Password', 'RetypePswd')
    });

    }
    get f() { return this.LoginForm.controls; }
    login(){
              
      for(let i=0;i<this.jsontypedata.length;i++){
        if(this.LoginForm.value.UserName==this.jsontypedata[i].UserName){
         if(this.LoginForm.value.Password==this.jsontypedata[i].Password){
           this.loginError=false;
           this.router.navigate(['details']);
         }else{
            this.loginErrorPswd=true;
         }
        }else{
         this.loginErrorUsename=true;
        }
      }
    }
    signup(){
      this.router.navigate(['signup']);
    }
	  Submit(){
      this.submitted = true;
      if (this.LoginForm.invalid) {
        return;
    }else{
      this.data= JSON.stringify(this.LoginForm.value);
      if(this.LoginForm.value.UserName=="" || this.LoginForm.value.Password==""){
        this.enterDetailsError=true;
      }else{
        this.jsondata= localStorage.getItem("dataLogin");
        this.jsontypedata=JSON.parse(this.jsondata);
      
              this.login();
      }
    }
    }

	  signin() {
    this.show=false;
	  }



}
