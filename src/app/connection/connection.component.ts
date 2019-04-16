import { Component, OnInit } from '@angular/core';
import{Connection} from '../connection';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  private connection=new Connection('','','','','','','','','','',);
  constructor(private apiService:ApiService,private router:Router) { }

  ngOnInit() {
  }
submitted=false;
  public onSubmit(ngForm: NgForm) { 
          console.log(this.connection);
    this.submitted=true;
     this.apiService.saveConnection(this.connection).subscribe((connection : Connection) => {
        console.log(connection);
      });
      ngForm.reset();
    }

reload()
{this.submitted=false;
  
  // this.router.navigate(['/connection']);
}

}
