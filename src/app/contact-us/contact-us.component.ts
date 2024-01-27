import { Component , Input} from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersdataService } from '../services/usersdata.service';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {


  constructor(private _UsersdataService:UsersdataService){}





   sendData:FormGroup = new FormGroup({
   name:new FormControl ('' , [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
   email:new FormControl('',[Validators.required, Validators.email]),
   phone:new FormControl('',[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
   })

   handleForm():void{
   const userinfo = this.sendData.value;

   if(this.sendData.valid === true){
    this._UsersdataService.UserData(userinfo).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error :(err) =>{
        console.log(err);
      },
    })


   }



   }
}
