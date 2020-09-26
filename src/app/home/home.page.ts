import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private socket:Socket) {}

  public mensajes
  public textoMensaje:string
  private usuario = "1"

  ngOnInit(){
    this.socket.connect()
    this.socket.emit("join",{username:"Jorge",room:"laroom"})
    this.socket.fromEvent("message").subscribe((message:any)=>{
      if(message.tipo=='alerta')
        console.log(message);
      else
        this.mensajes = message
      
    })
  }

  onClickEnviar(){
    const mensaje = {
      texto:this.textoMensaje,
      usuario:this.usuario,
      room:"laroom"
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
