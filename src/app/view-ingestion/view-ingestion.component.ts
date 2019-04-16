import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-ingestion',
  templateUrl: './view-ingestion.component.html',
  styleUrls: ['./view-ingestion.component.css']
})
export class ViewIngestionComponent implements OnInit {

  private  connections:  Array<object> = [];
  constructor( private apiService:ApiService) {}
  ngOnInit() {
    this.findAllConnections();
  }
  public  findAllConnections(){
		this.apiService.getConnections().subscribe((data:  Array<object>) => {
			this.connections  =  data;
			
			console.log(data);
		});
  }

}
