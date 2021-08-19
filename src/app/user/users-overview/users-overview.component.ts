import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';
import { User } from '../model/user.model';
import { RouterLinkRendererComponent } from '../router-link-renderer/router-link-renderer.component';

@Component({
  selector: 'app-users-overview',
  templateUrl: './users-overview.component.html',
  styleUrls: ['./users-overview.component.css']
})
export class UsersOverviewComponent implements OnInit {

  public users: any[] = [];
  defaulfColDefs: any = {
    resizable: true,
    wrapText: true,
    sortable: true,
    filter: true
  };
  columnDefs = [
    { field: "id", headerName: "ID" },
    {
      field: "firstName", headerName: "First Name", cellRenderer: function (params: any) {
        return '<img src="assets/img/face.png" width="20" height="20"> ' + params.data.firstName;
      }
    },
    { field: "lastName", headerName: "Last Name" },
    { field: "emailAddress", headerName: "Email" },
    { field: "verifiedTeacher", headerName: "Verified Teacher" },
    {
      field: "edit", headerName: "", cellRendererFramework: RouterLinkRendererComponent
    }
  ];

  constructor(private userService: UserService, private router: Router, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("users")) {
      const users = sessionStorage.getItem("users");
      let allUsers: User[] = users ? JSON.parse(users) : [];
      this.createGridData(allUsers);
    } else {
      this.userService.getAllUsers().subscribe(users => {
        this.createGridData(users)
        
      });
    }
  }
  createGridData(users: User[]) {
    this.users = users.map(user => {
      return {
        id: user.id,
        emailAddress: user.emailAddress,
        firstName: user.name.givenName,
        lastName: user.name.familyName,
        verifiedTeacher: user.verifiedTeacher ? "Yes" : "No",
        edit: user.photoUrl
      };
    });
  }

  toCreateUser() {
    this.router.navigate(["create"], { relativeTo: this.aRoute.parent });
  }

}
