import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('new_chat') modal:ModalController;
  @ViewChild('popover') popover:PopoverController;

  segment = 'chats';
  open_new_chat = false;
  users=[
    {id: 1, name: "My beautiful mother💕😍", photo: "https://i.pravatar.cc/57"},
    {id: 2, name: "Moises Goméz", photo: "https://i.pravatar.cc/58"}
    
  ]

  chatRooms=[
    {id: 1, name: "My beautiful mother💕😍", photo: "https://i.pravatar.cc/57"},
    {id: 2, name: "Moises Goméz", photo: "https://i.pravatar.cc/58"}
    
  ]
  

  constructor() { }
  
  logout(){
    this.popover.dismiss()
  }
  
  onSegmentChanged(event:any){
    console.log(event)
  }
  
  newChat(){
    //Activar la venta para el nuevo chat
    this.open_new_chat = true;
  }
  onWillDismiss(event:any){}
  
  cancel(){
    this.modal.dismiss();
    this.open_new_chat = false;
  }

  startChat(item){}

  getChat(item){}
  
    ngOnInit() {
    }
  
  
  
}
