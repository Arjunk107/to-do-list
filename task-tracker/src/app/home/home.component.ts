import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskManagementService } from '../task-management.service';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showform = false;
  ids: any;
  taskData: any[] = [];
  public taskUpdate: any = {
    id: '',
    name: '',
    completed: ''
  };
  public newids: any;
  public currentid: any;
  @ViewChild('tForm')
  form!: NgForm;

  constructor(private taskdetails: TaskManagementService) {
    this.showdata()
  }
  public showdata() {
    this.taskdetails.showlist().subscribe((data: any[]) => {
      this.taskData = data;
    })
  }
  public showForm() {
    this.showform = true;
  }
  public demo(num: any) {
    this.ids = num + 1;
    this.newids = this.taskData.find((p) => { return p.id == this.ids })
    console.log(this.newids)
    console.log(this.form);
    this.form.setValue({
      id: this.newids.id,
      name: this.newids.title,
      completed: this.newids.completed
    })
  }
  public deleteData(numId: any) {
    this.taskdetails.deletelist(numId).subscribe((Response: any[]) => {
      console.log(Response);
      alert('Deleted Successfully')
      this.showdata()
    })
  }
  public updatelist(form: any, taskUpdate: any) {
    this.currentid = this.taskUpdate.id;
    console.log(this.taskUpdate)
    this.taskdetails.updateList(this.currentid, this.taskUpdate).subscribe((Response) => {
      console.log(Response);
      alert("Successfully Updated");
    })
  }
}


