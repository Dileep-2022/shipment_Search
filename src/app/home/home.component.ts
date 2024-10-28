import { Component } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { RouterModule } from '@angular/router';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule], // Import RouterModule for routing directives
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Corrected to styleUrls
})
export class HomeComponent {
  shipmentSearchForm: any;
  constructor(private communicationService: CommunicationService,private fb : FormBuilder) {
    this.shipmentSearchForm = this.fb.group({
      orderid: [''],
      shipment: [''],
      firstName: [''],
      lastName: [''],
      emailId: ['']
    });
  }
  onSubmit() {
    console.log('Form submitted:', this.shipmentSearchForm.value);
  }

  onReset() {
    this.shipmentSearchForm.reset();
  }
  sendData() {
    const dataToSend = 'Data from Home Component'; // Example data to send
    this.communicationService.setData(dataToSend); // Store data in the service
  }
}
