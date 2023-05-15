import { Input,Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ActiveuserService } from '../services/activeuser.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() menuItems: any[] =["buyer","seller","login","auction"];
  connected:boolean;
  seller:boolean;

  constructor(private ac:ActiveuserService) {
    this.ac.getLoggedInStatus().subscribe(res=>{
      this.connected = res
    })
  }

  ngOnInit(): void {
    this.ac.getSellerStatus().subscribe(res=>{
      this.seller = res
    })
  }

  logout(){

   Swal.fire({
        title: 'Are you sure you want to logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.ac.updateLoggedInStatus(false)
          Swal.fire(
            'Logged out!',
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {

        }
      })
  }

}
