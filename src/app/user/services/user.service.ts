import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("assets/mock/user/userMock.json").pipe(tap(users => sessionStorage.setItem("users", JSON.stringify(users))));
  }

  createOrUpdateUser(userToUpdate: User, isCreate: boolean): void {
    const users = sessionStorage.getItem("users");
    let allUsers: User[] = users ? JSON.parse(users) : [];
    
    if (isCreate) {
      allUsers.push(userToUpdate);
    } else {
      const userInd = allUsers.findIndex(user => user.id === userToUpdate.id);
      allUsers[userInd] = userToUpdate;
    }
    sessionStorage.setItem("users", JSON.stringify(allUsers));
  }
}
