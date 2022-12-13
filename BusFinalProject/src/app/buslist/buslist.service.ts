import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { BusList } from './buslist';
import { Route } from '@angular/router';
import { BusRouteData } from '../model/busroutedata';
import { AllBus } from '../model/allbus';

@Injectable({
  providedIn: 'root'
})
export class BusListService {
  
  constructor(private http:HttpClient) { 
  }
  //creating 
  addBusList(bus:BusList):Observable<BusList>{
 
    return this.http.post<BusList>("http://localhost:8081/BusApp/bus", bus);
  }
  
  getAllBusList():Observable<BusList[]>{
    
    return this.http.get<BusList[]>("http://localhost:8081/BusApp/bus");
  }

  getBusListById(busid:number):Observable<BusList>{
      return this.http.get<BusList>(`http://localhost:8081/BusApp/bus/${busid}`);

  }

  deleteBusList(busid:number):Observable<BusList>{
    return this.http.delete<BusList>(`http://localhost:8081/BusApp/bus/${busid}`);

  }

  updateBusList(bus:BusList):Observable<BusList>{
    return this.http.put<BusList>("http://localhost:8081/BusApp/bus",bus);
  }

  getAllBusListByRoute(routeFrom:any,routeTo:any):Observable<BusRouteData>{
   
    return this.http.get<BusRouteData>(`http://localhost:8081/BusApp/route/${routeFrom}/${routeTo}`);
  }

  findBus(busid:any):Observable<BusList>{ 
  
    return this.http.get<BusList>(`http://localhost:8081/BusApp/bus/${busid}`);
  }
}

