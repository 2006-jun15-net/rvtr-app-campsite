import { Component, OnInit } from '@angular/core';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';

@Component({
  selector: 'uic-lodging-home',
  templateUrl: './lodging-home.component.html',
  styleUrls: ['./lodging-home.component.scss'],
})
export class LodgingHomeComponent implements OnInit {
  /**
   * fields usied in this component
   */
  lodgings: Lodging[] | null = null;

  /**
   * represents lodging-home component's constructor
   * @param lodgingService the lodging service
   */
  constructor(private readonly lodgingService: LodgingService) {}

  /**
   * gets all the lodges available with the help of
   * get() in lodging service component
   */
  ngOnInit(): void {
    this.lodgingService.get().subscribe(
      (data) => (this.lodgings = data)
    );
  }

}
