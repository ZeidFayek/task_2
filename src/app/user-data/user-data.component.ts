import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})
export class UserDataComponent {
  userId: any;
  userDetails: any;
  isLoading: boolean = true;

  constructor(private _ActivatedRoute: ActivatedRoute, private _UserService: UserService) {
    _ActivatedRoute.paramMap.subscribe((params) => {
      this.userId = params.get('id')
    })

    _UserService.getDetailedViewUser(this.userId).subscribe({
      next: (response) => {
        console.log(response);
        this.isLoading = false;
        this.userDetails = response;
      }
    })
  }


}
