import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = 'Teste';
  idade = 34;
  userData = {
    email: 'diogo.svaladao@gmail.com',
    perfil: 'Admin',
  };

  title = 'curso-angular';
}
