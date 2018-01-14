import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // (1)
import 'rxjs/add/operator/map';
import {MemberService} from "./member.service"; // (2)

interface Member {
  id: string;
  login: string;
  avatar_url: string;
}

@Component({
  selector: 'sl-members',
  templateUrl:'./members.component.html',
  styleUrls:['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[];

  constructor(private memberService : MemberService) { } // (3)

  ngOnInit() {
    this.memberService.getMembers()
      .subscribe(data => {
        if(data)
          this.members = data ;
      })
  }
}
