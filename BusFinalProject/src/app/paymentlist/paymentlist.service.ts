import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentList } from './paymentlist';


@Injectable({
  providedIn: 'root'
})
export class PaymentListService {
  
  constructor(private http:HttpClient) { 
  }
  //creating
  addPaymentList(payment:PaymentList):Observable<PaymentList>{
 
    return this.http.post<PaymentList>("http://localhost:8081/BusApp/payment", payment);
  }
  
  getAllPaymentList():Observable<PaymentList[]>{
    
    return this.http.get<PaymentList[]>("http://localhost:8081/BusApp/payment");
  }

  getPaymentListById(paymentid:number):Observable<PaymentList>{
      return this.http.get<PaymentList>(`http://localhost:8081/BusApp/payment/${paymentid}`);

  }
  updatePaymentList(payment:PaymentList):Observable<PaymentList>{
    return this.http.put<PaymentList>("http://localhost:8081/BusApp/payment",payment);
  }

  
  deletePaymentList(paymentid:number):Observable<PaymentList>{
    return this.http.delete<PaymentList>(`http://localhost:8081/BusApp/payment/${paymentid}`);

  }

}