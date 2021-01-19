import { Component, OnInit,Output } from '@angular/core';
import { RestoService} from '../resto.service';


@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  item=[];
  

  constructor(private resto:RestoService) {}
  collection={};
  
  
  ngOnInit(): void {
    
  
    this.resto.getlist().subscribe((result)=>{
      console.warn(result);
      this.collection=result;
    })
  }


}
