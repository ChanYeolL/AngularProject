import {Component} from "@angular/core";

interface Address {
  province: string;
  city: string;
}

@Component({
  selector: `sl-user`,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  name: string;
  address: Address;
  showSkills: boolean;
  skills: string[];

  constructor() {
    this.name = 'ChanYeol';
    this.address = {
      province: '湖南',
      city: '张家界'
    };
    this.showSkills = true;
    this.skills = ['ChanYeol1', 'ChanYeol2', 'ChanYeol3'];
  }

  toggleSkills(): void {
    this.showSkills = !this.showSkills ;
  }

  addSkill(skill:string):void{
    let skillStr = skill.trim() ;
    if(this.skills.indexOf(skillStr) === -1){
      this.skills.push(skillStr) ;
    }
  }
}




