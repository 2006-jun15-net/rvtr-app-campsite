import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Profile } from '../../../data/profile.model';

@Component({
  selector: 'uic-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  // @ViewChild('userInput') userInput: any;

  @Input() profiles: Profile[];

  constructor() {}

  ngOnInit(): void {}
}
