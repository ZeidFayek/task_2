import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDataComponent } from './user-data/user-data.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', canActivate: [authGuard], component: UsersComponent },
    { path: 'login', component: LoginComponent },
    { path: 'users', canActivate: [authGuard], component: UsersComponent },
    { path: 'userdata/:id', canActivate: [authGuard], component: UserDataComponent }
];
