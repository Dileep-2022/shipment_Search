import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shipment',
  standalone: true,
  imports: [RouterModule], // Import RouterModule for routing directives
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss'] // Corrected to styleUrls
})
export class ShipmentComponent implements OnInit {
  receivedData: any;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.sharedData$.subscribe(data => {
      this.receivedData = data; // Automatically updates when new data is set
    });
  }
}
