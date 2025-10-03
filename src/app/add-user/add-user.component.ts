import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user = {
    user_name: '',
    age: '',
    city: '',
    user_hobby: ''
  };

  constructor(private userDataService: UserDataService) {}

  addUser() {
    this.userDataService.saveUser(this.user).subscribe({
      next: (response) => {
        console.log(' User saved successfully:', response);
        this.user = { user_name: '', age: '', city: '', user_hobby: '' };
      },
      error: (err) => {
        console.error(' Error saving user:', err);
      }
    });
  }
}
