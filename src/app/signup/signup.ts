import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {

  fullname = "";
  email = "";
  password = "";
  showPassword = false;

  constructor(private router: Router){}

  togglePassword(){
    this.showPassword = !this.showPassword;
  }

  register(){

    if(this.fullname === "" || this.email === "" || this.password === ""){
      alert("Please fill all fields");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if(users.find((u:any)=> u.email === this.email)){
      alert("Email already registered!");
      return;
    }

    let newUser = {
      fullname: this.fullname,
      email: this.email,
      password: this.password,
      role: this.email === "admin@gmail.com" ? "admin" : "user"
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    this.router.navigate(['/']);   // go to sign in page
  }

}