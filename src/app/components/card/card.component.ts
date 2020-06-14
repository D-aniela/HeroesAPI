import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @Input() HeroesInput:Heroe;

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

  public GoToDescripcion(id: number){
    this.routes.navigate(['descripcion', id])
  }
}
