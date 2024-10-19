import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css'],
})
export class RsvpComponent {
  nome: string = '';
  acompanhantes: number = 0;

  constructor(private http: HttpClient) {}

  submitForm() {
    const url = 'https://script.google.com/macros/s/AKfycbx7cZ2mqmAXKfHS5C042m8-qqk5aZ8YNwDOX6IDAolq8u4x7vAmlKeSWpikQQzmdcsc6A/exec'; // Substitua pela URL do seu web app

    const body = {
      nome: this.nome,
      acompanhantes: this.acompanhantes,
    };

    this.http.post(url, body).subscribe(
      (response) => {
        console.log('Dados enviados com sucesso:', response);
        // Limpar o formulário se necessário
        this.nome = '';
        this.acompanhantes = 0;
      },
      (error) => {
        console.error('Erro ao enviar dados:', error);
      }
    );
  }
}
