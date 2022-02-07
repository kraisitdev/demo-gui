import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  public currUser: string = '';
  constructor(private _router: Router) {}

  ngOnInit(): void {
    const currUser = sessionStorage.getItem('SS_CURRENT_USER');
    if (currUser) {
      this.currUser = currUser;
    } else {
      this._router.navigateByUrl('/login');
    }
  }

  public logout() {
    sessionStorage.clear();

    Swal.fire({
      icon: 'success',
      title: 'Logout สำเร็จ!',
      text: 'กำลังออกจากระบบ...',
      allowOutsideClick: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    }).then(() => this._router.navigateByUrl('/login'));
  }
}
