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
    console.log("Suscribiendo");
    
    this.socket.fromEvent("message").subscribe(message=>{
      console.log("Mjjj",message)
      this.mensajes = message
    })
  }

  onClickEnviar(){
    const mensaje = {
      texto:this.textoMensaje,
      usuario:this.usuario
    }
    this.socket.emit("message",mensaje)
    this.textoMensaje = ""
  }

  cambiarUsuario(){
    this.usuario = "2"
    console.log("us",this.usuario);
    
  }

}
