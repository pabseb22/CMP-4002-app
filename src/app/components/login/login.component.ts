import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ActiveuserService } from 'src/app/services/activeuser.service';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  URL_API = "http://localhost:3000";
  constructor(public http:HttpService,
    private ac:ActiveuserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    }
  login(email:string,password:string){
    let aux =  this.http.post(`${this.URL_API}/login`, {email,password}).subscribe((res:any)=>{
      if(res=="error"){
        Swal.fire("Something went wrong with validation")
      }else{
        console.log(res);
        let data = res
        this.ac.updateLoggedInStatus(true);
        this.ac.setUser(new User(data.name,data.lastname,data.email,data.type))
        if(data.type ==1 ){
          this.ac.updateSeller(true)
        }else{
          this.ac.updateSeller(false)
        }
        this.router.navigate(['profile'])
      }
    });
  }
}
