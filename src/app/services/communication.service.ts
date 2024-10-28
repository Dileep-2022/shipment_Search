import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service globally available
})
export class CommunicationService {
  private sharedDataSubject = new BehaviorSubject<any>(null); // Initial value can be null or any other value
  sharedData$ = this.sharedDataSubject.asObservable(); // Observable to subscribe to

  // Method to set data
  setData(data: any) {
    this.sharedDataSubject.next(data); // Emit new data to subscribers
  }

  // Optional method to get the current value (in case needed)
  getData(): any {
    return this.sharedDataSubject.getValue();
  }
}
