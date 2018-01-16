import {Component, Input, OnInit} from '@angular/core';

import {FormHero} from "./form-hero";
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {forbiddenNameValidator} from "./forbidden-name.directive";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls:['./hero-form.css'],
})
export class HeroFormComponent implements OnInit{
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new FormHero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  // forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  //   return (control: AbstractControl): {[key: string]: any} => {
  //     const forbidden = nameRe.test(control.value);
  //     return forbidden ? {'forbiddenName': {value: control.value}} : null;
  //   };
  // }
  // @Input() heroForm ;
  // @Input() hero ;
  heroForm : FormGroup ;

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
       forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, Validators.required)
    });
  }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }

  /** A hero's name can't match the given regular expression */

}
