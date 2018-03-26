import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
    },
    {
        path: 'main',
        component: MainpageComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }

];