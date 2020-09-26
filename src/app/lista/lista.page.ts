import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public rooms = [
    {idstr:"127"},
    {idstr:"543"},
    {idstr:"57"},
    {idstr:"48"},
    {idstr:"93"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
