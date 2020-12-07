import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Feedback } from 'src/model/feedback';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class FeedbackService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get('http://localhost:5000/api/items')
  }

  addData(newEntry):Observable<any>{
    var head = new HttpHeaders()
    head.append('Content-Type','application/json');
    return this.http.post('http://localhost:5000/api/items',newEntry) 
  }

  deleteData(id):Observable<any>{
    console.log('/api/items/'+id)
    return this.http.delete('http://localhost:5000/api/items/'+id)
  }
}
