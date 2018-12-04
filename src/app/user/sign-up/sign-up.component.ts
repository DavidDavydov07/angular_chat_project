import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.toastr.success('This is a test', 'Hello, my name is john johnson.', {
      closeButton: true
    });
  }

}
