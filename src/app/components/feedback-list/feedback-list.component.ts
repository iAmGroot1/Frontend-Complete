import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/feedback.service';
import { Feedback } from 'src/model/feedback';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})

export class FeedbackListComponent implements OnInit {
  feedbackList:Feedback[]
  entry = {
    name : 'Rp',
    feedback : 'This is the third one'
  }
  constructor(private service:FeedbackService) { 

  }

  ngOnInit(): void {
    this.getDataFromAPI()
  }
  onClickSubmit(data) {
    console.log("Entered Email id : " + data.feedback);
 }

  addData(data){
    this.entry.name = data.name
    this.entry.feedback= data.feedback
    this.service.addData(this.entry).subscribe((res)=>{
      console.log("Added Item")
       this.getDataFromAPI()

    })
  }

  getDataFromAPI(){
    this.service.getData().subscribe((res)=> {
      //res.json()
      this.feedbackList = res;
      console.log("Response from server",this.feedbackList)
    },(error) => {
      console.log("error",error)
    })
  }

    delete(id){
      //alert("clicked")
      this.service.deleteData(id).subscribe((res)=>{
        console.log("deleted")
        this.getDataFromAPI()
      })
      console.log(id) 
    }
  // clicked(id){
  //   console.log(id)
  // }
}
