import { Component, OnInit } from '@angular/core';

import { DataModel } from '../data-model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailform',
  templateUrl: './detailform.component.html',
  styleUrls: ['./detailform.component.css']
})
export class DetailformComponent implements OnInit {

  queryform : FormGroup;

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.queryform = this.fb.group({
      subjectName : ['' , [Validators.required , Validators.minLength(6)]],
      messageDetails: ['', [Validators.required, Validators.maxLength(100) ]]
    })
  }

  submitDetails(){
    let val : DataModel = this.queryform.value;
    console.log(val);
    document.getElementById('btnSubmit').innerHTML = '<i class="fa fa-spinner fa-spin"></i> Please wait';
    setTimeout(() => {
      document.getElementById('btnSubmit').innerHTML="Submit";
      this.queryform.reset();
    }, 3000);
  }

}
