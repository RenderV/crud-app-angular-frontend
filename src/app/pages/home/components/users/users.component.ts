import { Component } from '@angular/core';
import { Router } from '@angular/router';

type user = {
  name: string;
  email: string;
  role:
    | 'Engenheiro de FE'
    | 'Engenheiro de BE'
    | 'Analista de Dados'
    | 'Líder Técnico';
  password: string;
};

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  userList: user[];

  constructor(private router: Router) {
    this.userList = [
      {
        name: 'Jorge da Silva',
        email: 'jorge@gmail.com',
        role: 'Engenheiro de FE',
        password: '123456',
      },
      {
        name: 'Maria Oliveira',
        email: 'maria@email.com',
        role: 'Engenheiro de BE',
        password: '123456',
      },
      {
        name: "José da Silva",
        email: "jose.silva@email.com",
        role: "Analista de Dados",
        password: "123456"
      },
    ];
  }

  redirectToAddUser() {
    this.router.navigate(["/app/add-user"]);
  }

  redirectToEditUser() {
    this.router.navigate(["/app/edit-user"]);
  }

  deleteUser(i: number){
    this.userList.splice(i, 1);
  }

}
