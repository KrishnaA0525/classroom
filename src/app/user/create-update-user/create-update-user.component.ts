import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-create-update-user',
  templateUrl: './create-update-user.component.html',
  styleUrls: ['./create-update-user.component.css']
})
export class CreateUpdateUserComponent implements OnInit {

  heading: string = "";
  submitLabel: string = "";
  userForm!: FormGroup;
  isCreateUser: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [],
      firstName: [],
      lastName: [],
      email: [],
      verifiedTeacher: []
    });
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const userId = params['id'];
        const users = sessionStorage.getItem("users");
        if (userId) {
          const user: User = users ? JSON.parse(users).find(
            (user: User) => {
              return userId === user.id;
            }
          ) : {};
          this.heading = "Edit User: " + user?.name.fullName;
          this.submitLabel = "Update";
          this.isCreateUser = false;
          this.userForm.setValue({
            id: user?.id,
            firstName: user?.name.givenName,
            lastName: user?.name.familyName,
            email: user?.emailAddress,
            verifiedTeacher: user?.verifiedTeacher
          });
        } else {
          this.userForm.patchValue({
            id: users ? JSON.parse(users).length + "" : "0"
          });
          this.isCreateUser = true;
          this.heading = "Create User";
          this.submitLabel = "Create";
        }
      }
    );
  }

  createOrUpdateUser() {
    const user: User = {
      id: this.userForm.value.id,
      emailAddress: this.userForm.value.email,
      name: {
        familyName: this.userForm.value.lastName,
        givenName: this.userForm.value.firstName,
        fullName: this.userForm.value.firstName + " " + this.userForm.value.lastName
      },
      permissions: [
        {
          permission: ""
        }
      ],
      photoUrl: "",
      verifiedTeacher: this.userForm.value.verifiedTeacher
    }
    this.userService.createOrUpdateUser(user, this.isCreateUser);
    this.router.navigate(["overview"], { relativeTo: this.activatedRoute.parent });
  }

  cancel(): void {
    this.router.navigate(["overview"], { relativeTo: this.activatedRoute.parent });
  }

}
