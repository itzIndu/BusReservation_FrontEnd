import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationList } from './reservationlist';

@Injectable({
  providedIn: 'root'
})
export class ReservationListService {
  
  constructor(private http:HttpClient) { 
  }
  //creating 
  addReservationList(reservation:ReservationList):Observable<ReservationList>{
 
    return this.http.post<ReservationList>("http://localhost:8081/BusApp/controllerr", reservation);
  }
  
  getAllReservationList():Observable<ReservationList[]>{
   
    return this.http.get<ReservationList[]>("http://localhost:8081/BusApp/controllerr");
  }

  getReservationListById(reservationId:number):Observable<ReservationList>{
      return this.http.get<ReservationList>(`http://localhost:8081/BusApp/controllerr/${reservationId}`);

  }

  deleteReservationList(reservationId:number):Observable<ReservationList>{
    return this.http.delete<ReservationList>(`http://localhost:8081/BusApp/controllerr/${reservationId}`);

  }

  updateReservationList(reservation:ReservationList):Observable<ReservationList>{
    return this.http.put<ReservationList>("http://localhost:8081/BusApp/controllerr",reservation);
  }

}

