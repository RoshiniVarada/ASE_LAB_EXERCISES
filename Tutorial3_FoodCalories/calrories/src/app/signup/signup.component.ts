import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
      Password: ['', Validators.required],
      RetypePswd:['',Validators.required]
    }, {
        //validator: MustMatch('Password', 'RetypePswd')
    });

    }
    get f() { return this.LoginForm.controls; }
    login(){
      this.router.navigate(['homeDetails']);
    }
    signup(){

      if(this.jsontypedata){
        for(let i=0;i<this.jsontypedata.length;i++){
            if(this.LoginForm.value.UserName==this.jsontypedata[i].UserName){
              this.loop_ended=true;
            }
        }
        if( this.loop_ended!=true){
          this.jsontypedata.push(JSON.parse(this.data));
          localStorage.setItem("dataLogin",JSON.stringify(this.jsontypedata));
          this.router.navigate(['details']);
        }else{
          this.userAlreadyexist=true;
          this.LoginForm.reset();
        }
       }else{
        this.jsontypedata=[ {
          UserName: "Roshini",
          Password: "1234",
          RetypePswd:"1234"
      }, {
        UserName: "Roshini2",
        Password: "12345",
        RetypePswd:"12345"
    },]
   
        for(let i=0;i<this.jsontypedata.length;i++){
          if(this.no_loop!=true){
            if(this.LoginForm.value.UserName==this.jsontypedata[i].UserName){
              this.userAlreadyexist=true;
              this.no_loop=true;
            }else{
              this.jsontypedata.push(JSON.parse(this.data));
              localStorage.setItem("dataLogin",JSON.stringify(this.jsontypedata));
              this.userAlreadyexist=false;
              this.no_loop=true;
              this.router.navigate(['details']);
             
            }
          }
        }

       }
       
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
        this.signup();
      }
    }
    }

	  Register() {
        this.show=true;
    }

}
