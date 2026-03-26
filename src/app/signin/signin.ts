import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signin.html',
  styleUrls: ['./signin.css']
})
export class Signin {

  email: string = "";
  password: string = "";

  constructor(private router: Router){}

  login(){

    if(this.email === "" || this.password === ""){
      alert("Please enter both email and password");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if(users.length === 0){
      alert("No users found! Please restore backup first.");
      return;
    }

    let user = users.find((u:any)=> u.email === this.email && u.password === this.password);

    if(user){
      localStorage.setItem("loggedInUserEmail", this.email);
      this.router.navigate(['/dashboard']);
    }else{
      alert("Invalid email or password");
    }
  }

  restoreBackup(){

    let users = [
      {
        fullname: "Admin User",
        email: "admin@gmail.com",
        password: "admin123",
        role: "admin"
      }
    ];

    localStorage.setItem("users", JSON.stringify(users));

    alert("Backup restored! Login with admin@gmail.com / admin123");
  }

}