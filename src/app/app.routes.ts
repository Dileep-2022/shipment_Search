import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShipmentComponent } from './shipment/shipment.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'shipment', component: ShipmentComponent }
];