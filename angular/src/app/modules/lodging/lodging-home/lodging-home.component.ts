import { Component, OnInit } from '@angular/core';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';
import { HttpErrorResponse } from '@angular/common/http';

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
  errorMessage: string;

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
      (data) => (this.lodgings = data),
      (error) => this.handleError(error)
    );
  }

  /**
   * handles errors occured into execution of
   * any functions if this function is called
   *
   * @param error error message
   */
  public handleError(error: HttpErrorResponse): void {
    console.log(error.status);
    if (error.status === 0) {
      this.errorMessage = 'Unable to connect to server';
    } else {
      this.errorMessage = error.status.toString();
    }
  }
}
