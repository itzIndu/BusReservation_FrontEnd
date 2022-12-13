import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedbackList } from './feedbacklist';


@Injectable({
  providedIn: 'root'
})
export class FeedbackListService {
  
  constructor(private http:HttpClient) { 
  }
  //creating 
  addFeedbackList(feedback:FeedbackList):Observable<FeedbackList>{
 
    return this.http.post<FeedbackList>("http://localhost:8081/BusApp/feedback", feedback);
  }
  
  getAllFeedbackList():Observable<FeedbackList[]>{
    
    return this.http.get<FeedbackList[]>("http://localhost:8081/BusApp/feedback");
  }

  getFeedbackListById(feedbackId:number):Observable<FeedbackList>{
      return this.http.get<FeedbackList>(`http://localhost:8081/BusApp/feedback/${feedbackId}`);

  }

  deleteFeedbackList(feedbackId:number):Observable<FeedbackList>{
    return this.http.delete<FeedbackList>(`http://localhost:8081/BusApp/feedback/${feedbackId}`);

  }

  updateFeedbackList(feedback:FeedbackList):Observable<FeedbackList>{
    return this.http.put<FeedbackList>("http://localhost:8081/BusApp/feedback",feedback);
  }

}
