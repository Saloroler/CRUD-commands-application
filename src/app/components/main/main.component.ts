import { Component, OnInit } from '@angular/core';
import { TocomService } from "../../services/tocom.service";

interface User {
  name:string;
  coment:string;
  document:string;
}
interface Change {
  edition: boolean;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  imgUrl:string = 'https://picsum.photos/120/120/?random';
  imgUrl2:string = 'https://picsum.photos/g/120/120';
  isTrusted:boolean = false;
  replyIf: boolean = false;
  comentsAccept:boolean = false;
  remU:boolean = true;

  comentatorUser:string ='';

  edit: Change = {
    edition: false
  };


  user:User ={
    name: '',
    coment: '',
    document: ''
  };

  constructor(
    public tocom: TocomService
  ) { }

  onFileSelected(event){
    this.isTrusted = true;
    console.log(event);
  }
  users:User[] = [
    {
      name: 'AuthorName',
      coment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur inventore maiores officiis quis. Accusantium ad blanditiis cum delectus eaque earum eligendi illum inventore iusto nemo nisi odio, omnis provident, veritatis?',
      document: ''
    }
  ];

  onSubmit(form){
    console.log(this.users);
    this.users.unshift({
      name: this.user.name,
      coment: this.user.coment,
      document: this.user.document
    });
    form.resetForm();
  }
  removeUser(i) {
    if(confirm('Are you sure you want to delete?')){
      this.users.splice(i, 1);
    };


  }
  replyUser(i){
    this.replyIf = !this.replyIf;
  }
  comentAccept(comentatorUser){
    this.comentatorUser = comentatorUser;
    this.replyIf = !this.replyIf;
    this.comentsAccept = !this.comentsAccept;
  }
  setPost(){
    this.edit.edition = !this.edit.edition
  }

}
