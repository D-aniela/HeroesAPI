import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @Input() HeroesInput:Heroe;

  constructor() { }

  ngOnInit(): void {
  }
}
