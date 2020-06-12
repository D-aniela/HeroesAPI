import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, switchMap, concatMap, map, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { ApiHeroesService } from '../../services/api-heroes.service';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css'],
})
export class GridCardsComponent implements OnInit {
  public ArraysHeroes: Array<Heroe> = [];
  public ArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13];

  constructor(private AHService: ApiHeroesService) {
    this.getHeroes();
  }

  public getHeroes() {
    this.ArraysHeroes = [];
    // concatMap se suscribe a un segundo observable cuando el primer observable emite un valor
    // diferencia es que el concatMap detiene la emision de valores del primer observable hasta que
    // el segundo observable haya completado su tarea
    from(this.ArrayNumber)
      .pipe(
        mergeMap((valor: number) =>
          this.AHService.getHeroe(valor).pipe(
            map((superheroe: any) => {
              const heroeFiltrado: Heroe = {
                image: superheroe.image.url,
                name: superheroe.name,
                id: superheroe.id,
              };
              return heroeFiltrado;
            })
          )
        )
      )
      .subscribe((heroeFiltrado: Heroe) => this.ArraysHeroes.push(heroeFiltrado));
  }

  ngOnInit(): void {}
}
