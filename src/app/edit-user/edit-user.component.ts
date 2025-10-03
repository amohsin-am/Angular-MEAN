import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId: string = '';

  user = {
    user_name: '',
    age: '',
    city: '',
    user_hobby: ''
  };

  constructor(
    private route: ActivatedRoute,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') || '';

    if (this.userId) {
      this.userDataService.getUserById(this.userId).subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (err) => {
          console.error('Error fetching user:', err);
        }
      });
    }
  }

  onSubmit(): void {
    this.userDataService.updateUser(this.userId, this.user).subscribe({
      next: (res) => {
        console.log('User updated successfully:', res);
      },
      error: (err) => {
        console.error('Error updating user:', err);
      }
    });
  }
}
