import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AddUserComponent, UserListComponent),
    provideHttpClient()
  ]
});
