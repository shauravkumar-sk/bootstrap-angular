import { Component, OnInit } from '@angular/core';
import { IngestionConfig } from '../ingestion-config';

@Component({
  selector: 'app-ingestion',
  templateUrl: './ingestion.component.html',
  styleUrls: ['./ingestion.component.css']
})
export class IngestionComponent implements OnInit {

  // private  connections:  Array<object> = [];

  // constructor(private  apiService:  ApiService) { }

private  ingestion = new IngestionConfig('','');
  ngOnInit() {
    // this.findConnectionByType('Target');
  }

  // public  findConnectionByType(type:string){
	// 	this.apiService.findConnectionByType(type).subscribe((data:  Array<object>) => {
	// 		this.connections  =  data;
			
	// 		console.log(data);
  //   });
  }
