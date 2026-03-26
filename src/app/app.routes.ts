import { Routes } from '@angular/router';
import { Signin } from './signin/signin';
import { Signup } from './signup/signup';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [

  { path: '', component: Signin },

  { path: 'signup', component: Signup },

  { path: 'dashboard', component: Dashboard }

];