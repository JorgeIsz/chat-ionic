import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { UserInfoProvider } from '../core/services/userinfo-provider';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public roomId:string
  private usuario:string
  private userInfo

  constructor(
    private socket:Socket,
    private userInfoPvdr:UserInfoProvider,
    ){    
      this.userInfo = this.userInfoPvdr.getInfo()
    } 
    
    public mensajes
    ngOnInit(){
      this.socket.connect()
      this.socket.emit("join",this.userInfo)
      this.socket.fromEvent("message").subscribe((message:any)=>{
        if(message.tipo=='alerta')
        console.log(message);
        else{
          this.mensajes = message
          console.log(this.mensajes);
          
        }
        
      })
    }
    
  public textoMensaje:string
  onClickEnviar(){
    const mensaje = {
      texto:this.textoMensaje,
      idUsuario:this.userInfo.username,
      room:this.userInfo.room
    }
    this.socket.emit("mensaje-entra",mensaje)
    this.textoMensaje = ""
  }

  cambiarUsuario(){
    this.usuario = "2"
    const estado = {
      estado:"Escribiendo...",
      usuario:this.usuario,
      room:"laroom"
    }
    this.socket.emit("estado-cambiado",estado)
    
  }

}
