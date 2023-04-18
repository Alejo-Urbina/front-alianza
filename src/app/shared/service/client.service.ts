import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { 
    
  }

  public saveCliente(cliente: any) {
    return this.http.post<Client>('http://localhost:8080/client', cliente).subscribe(
      respuesta => {
        console.log('La petición se ha realizado correctamente');
      },
      error => {
        console.error('Ha ocurrido un error', error);
      }
    );
  }

  public getClient(url:string){
    return this.http.get(url);
  }

}
