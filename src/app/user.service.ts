import { Injectable } from '@angular/core';
//import { getMaxListeners } from 'cluster';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  login(data)
  {
   // console.log('getting data in service......',sendData);
    //this.uname = data.uname,
    //console.log('VALUE........',uname);
   // this.psw = data.psw;
    //console.log('VALUE........',this.psw);
    if(data.uname=="soumendu.ghosh26@gmail.com" && data.psw=="12345")
        console.log("SUCCESFULL");
    else
        console.log("UNSUCCESFULL");

  }
}
