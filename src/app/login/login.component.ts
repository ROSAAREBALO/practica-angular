import { Component, OnInit } from '@angular/core';

//import {MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'pa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 userN:string ='';
passwordd: string ='';





  constructor() { }

  ngOnInit() {
  }

onInputFocus(): void {
     console.log('Focus!');
     
   }
   validacion():void {
     if(this.userN=='test' && this.passwordd=='test'){
       
           alert ('los datos son validos');
     }else{
       alert  ('escriba el password y el userName');
     }
   }

 onClickMe(){
   this.validacion();

 }




 

}
