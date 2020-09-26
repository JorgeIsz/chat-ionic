import { Injectable } from '@angular/core';


@Injectable()
export class UserInfoProvider{

    private username:string
    private room:string

    public setInfo(username:string,room:string){
        this.username = username
        this.room = room
    }
}