import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent{
  editUserForm: FormGroup;
  userToEdit: {
    name: string,
    email: string,
    role: "Engenheiro de FE" | "Engenheiro de BE" | "Analista de Dados" | "Líder Técnico",
    password: string
  };

  constructor(private router: Router){

    this.userToEdit = {
      name: "Jorge da Silva",
      email: "jorge.silva@email.com",
      role: "Engenheiro de FE",
      password: "123456"
    }

    this.editUserForm = new FormGroup({
      name: new FormControl(this.userToEdit.name, Validators.required),
      email: new FormControl(this.userToEdit.email, [Validators.required, Validators.email]),
      role: new FormControl(this.userToEdit.role),
      password: new FormControl(this.userToEdit.password, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    })
  }
  onSubmit(){
    console.log("User edited with success!");
    console.log(this.editUserForm.value);
    this.router.navigate(["/app/users"]);
  }
  
}
