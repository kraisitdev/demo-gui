import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor(private _router: Router) {}

  async ngOnInit() {
    const currUser = sessionStorage.getItem('SS_CURRENT_USER');
    if (currUser) {
      this._router.navigateByUrl('/main/home');
    }
  }

  public async login() {
    if (this.username === 'admin' && this.password === 'P@ssw0rd') {
      Swal.fire({
        icon: 'success',
        title: 'Login สำเร็จ!',
        text: 'กำลังเข้าสู่ระบบ...',
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      }).then(() => {
        sessionStorage.setItem('SS_CURRENT_USER', this.username);
        this._router.navigateByUrl('/main/home');
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Username หรือ Password ผิด!',
        text: 'โปรดตรวจสอบและกรอกข้อมูลใหม่อีกครั้ง',
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#2196f3',
      });
    }
  }
}
