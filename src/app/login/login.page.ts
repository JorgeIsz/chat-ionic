import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserInfoProvider } from '../core/services/userinfo-provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  public username:string
  public room:string

  constructor(
    private router:Router,
    private toastCtrl:ToastController,
    private userInfoPvdr:UserInfoProvider,
  ) { }


  ngOnInit() {
  }

  onClickContinuar(){
    if(this.username && this.room){
      this.userInfoPvdr.setInfo(this.username,this.room)
      this.router.navigate(['/lista'])
    }
    else
      this.mostrarToast()
  }

  async mostrarToast() {
    const toast = await this.toastCtrl.create({
      message: 'Digita los campos primero.',
      duration: 1500
    })
    toast.present()
  }

}
