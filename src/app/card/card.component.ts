import { Component, OnInit, Input } from '@angular/core';
import { faDatabase, faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() 
  user;

  faEnvelope = faEnvelope;
  faDatabase = faDatabase;
  faMapMarkedAlt =faMapMarkedAlt;
  faPhone = faPhone;

  constructor(private userService : UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onChange(){
    return this.userService.getUser().subscribe(
      (user: any) => {
        console.log(user);
        this.user = user.results[0];
      },
      (err) => {
        this.toastr.error(err.status, "Oops!!")
      }
    )
  }

}
