import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})

export class Dashboard {

  welcomeMessage: string = "";
  activeSection: string = "dashboard";

  constructor(private router: Router) {

    const userEmail = localStorage.getItem("loggedInUserEmail");

    if (!userEmail) {
      this.router.navigate(['/']);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const currentUser = users.find((u: any) => u.email === userEmail);

    if (currentUser) {
      this.welcomeMessage = "Hello, " + currentUser.fullname + " 👋";
    }

  }

  renderDashboard() {
    this.activeSection = "dashboard";
  }

  renderProjects() {
    this.activeSection = "projects";
  }

  renderMessages() {
    this.activeSection = "messages";
  }

  renderProfile() {
    this.activeSection = "profile";
  }

  renderAnalytics() {
    this.activeSection = "analytics";
  }

  logout() {
    localStorage.removeItem("loggedInUserEmail");
    alert("Logged out successfully");
    this.router.navigate(['/']);
  }

}