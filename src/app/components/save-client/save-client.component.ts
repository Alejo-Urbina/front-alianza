import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/model/client';

@Component({
  selector: 'app-save-client',
  templateUrl: './save-client.component.html',
  styleUrls: ['./save-client.component.scss']
})
export class SaveClientComponent implements OnInit{
  client:Client = new Client("","","","",new Date(1990,10,20),new Date(1990,10,20),);

  constructor(private http: HttpClient){
    
  }

  ngOnInit(): void {
  }
  
  crear() {
    this.http.post('http://localhost:8080/client', this.client).subscribe(
      respuesta => {
        console.log('La petición se ha realizado correctamente');
      },
      error => {
        console.error('Ha ocurrido un error', error);
      }
    );
  }

}
