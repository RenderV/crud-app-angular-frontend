import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  users: User[] = [];
  userCount: number = 0;
  userCountByRole: { [key: string]: number } = {};

  constructor() {
    this.generateUsers();
  }

  generateUsers(): void {
    const roles = ['Engenheiro de FE', 'Engenheiro de BE', 'Analista de Dados', 'Líder Técnico'];
    const names = ['João', 'Maria', 'Carlos', 'Ana'];

    for (let i = 0; i < roles.length; i++) {
      const user: User = {
        id: i + 1,
        name: names[i],
        email: `${names[i].toLowerCase()}@gmail.com`,
        role: roles[i]
      };

      this.users.push(user);
    }

    this.userCount = this.users.length;
    this.userCountByRole = this.getUserCountByRole();
  }

  getUserCountByRole(): { [key: string]: number } {
    return this.users.reduce((acc: { [key: string]: number }, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {});
  }
}
