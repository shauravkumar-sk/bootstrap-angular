import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-connection',
  templateUrl: './view-connection.component.html',
  styleUrls: ['./view-connection.component.css']
})
export class ViewConnectionComponent implements OnInit {

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
