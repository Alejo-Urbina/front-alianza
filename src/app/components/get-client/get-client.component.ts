import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/service/client.service';

@Component({
  selector: 'app-get-client',
  templateUrl: './get-client.component.html',
  styleUrls: ['./get-client.component.scss']
})
export class GetClientComponent implements OnInit{
  public listClients:any = [];

  constructor(private clientService:ClientService){

  }

  ngOnInit(): void {
    this.getClients();
  }

  public getClients(){
    this.clientService.getClient("http://localhost:8080/client")
    .subscribe(respuesta => {
      this.listClients = respuesta;
    })
  }

}
