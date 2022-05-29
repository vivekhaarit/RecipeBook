import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showRecipe:boolean=false;
  @Output() featureSelected=new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature:string){
   return this.featureSelected.emit(feature);
  }

 
}
