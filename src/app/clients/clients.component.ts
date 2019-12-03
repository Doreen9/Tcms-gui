import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients = [

  {id: '1', name: 'Christiana Asare', address: 'Tema',  email: 'christianaasare@gmail.com', telephone: '055879900' },
  {id: '2', name: 'David Acquah', address: 'Mallam', email: 'davidacquah@gmail.com', telephone: '054789909' },
  {id: '3', name: 'Maame Yaa', address: 'North Kaneshie', email: 'yaa@gmail.com', telephone: '60900494' },
  {id: '4', name: 'Samuel Kwakye', address: 'East Legon', email: 'kwayesamuel@gmail.com', telephone: '034487797' },
  {id: '5', name: 'Franklin Luther', address: 'Haatso', email: 'franklin@gmail.com', telephone: '0243867888' }
  
  ];

  constructor() {
  
   }

  ngOnInit() {
  }

}
