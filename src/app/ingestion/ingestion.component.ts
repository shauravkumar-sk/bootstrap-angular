import { Component, OnInit } from '@angular/core';
import { IngestionConfig } from '../ingestion-config';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ingestion',
  templateUrl: './ingestion.component.html',
  styleUrls: ['./ingestion.component.css']
})
export class IngestionComponent implements OnInit {

  private  connections:  Array<object> = [];
  submitted = false;

  constructor(private  apiService:  ApiService) { }

private  ingestion = new IngestionConfig('','','','','','',false,false,false,'');
  ngOnInit() {
     this.findConnectionByType('Target');
  }

  public  findConnectionByType(type:string){
		this.apiService.findConnectionByType(type).subscribe((data:  Array<object>) => {
			this.connections  =  data;
			
			console.log(data);
		});
  }


  public onSubmit() { 
  this.submitted = true;
    console.log(this.ingestion);
  
   this.apiService.saveIngestionConfig(this.ingestion).subscribe((ingestion : IngestionConfig) => {
       this.ingestion  =  ingestion;
        console.log(ingestion);
    });
  }

  isDisabled = true;
    triggerSomeEvent() {
        this.isDisabled = !this.isDisabled;
        return;
    }
connectionName="";
    selectConnection(name){
this.connectionName=name;
    }
}

