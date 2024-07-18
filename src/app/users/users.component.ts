import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, SearchPipe, RouterLink, NgIf],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  pageSize = 5; pageIndex = 0;
  users: any[] = [];
  usersData = new BehaviorSubject<any[]>([]);
  usersDataFilter = new BehaviorSubject<any[]>([]);
  term: string = '';
  isLoading: boolean = true;
  sortedNames: any;
  sortedEmails: any;
  sortByUserNames: any;

  constructor(private _UserService: UserService, private _Router: Router) { }

  ngOnInit(): void {
    this._UserService.displayAllUser().subscribe({
      next: (response) => {
        this.usersData.next(response);
        this.usersDataFilter.next(response);
        this.isLoading = false;
        this.updatePaginationPageUsers();
      }
    })
  }
  sortByName() {
    this.sortedNames = this.usersData.value.sort((a, b) => a.name.localeCompare(b.name));
    this.usersData.next(this.sortedNames);
    this.users = this.sortedNames;
    this.updatePaginationPageUsers();
  }
  sortByEmail() {
    this.sortedEmails = this.usersData.value.sort((a, b) => a.email.localeCompare(b.email));
    this.usersData.next(this.sortedEmails);
    this.users = this.sortedEmails;
    this.updatePaginationPageUsers();
  }

  sortByUserName() {
    this.sortByUserNames = this.usersData.value.sort((a, b) =>
      a.username.localeCompare(b.username),
    );
    this.usersData.next(this.sortByUserNames);
    this.users = this.sortByUserNames;
    this.updatePaginationPageUsers();
  }

  updatePaginationPageUsers(): void {
    const PaginationStart = this.pageIndex * this.pageSize;
    const PaginationEnd = PaginationStart + this.pageSize;
    this.users = this.usersData.value.slice(PaginationStart, PaginationEnd);
  }

  PaginationPageMove(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.updatePaginationPageUsers();
  }
  logout() {
    localStorage.removeItem('userEmail');
    this._Router.navigate(['/login']);
  }

}
