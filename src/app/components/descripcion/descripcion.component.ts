import { Component, OnInit } from '@angular/core';
import { ApiHeroesService } from '../../services/api-heroes.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
})
export class DescripcionComponent implements OnInit {
  public DetailHero;
  private urlApiHeroes = `https://www.superheroapi.com/api.php/`;
  private idApiHeores = `3312144262137687/`;

  constructor(
    private AHService: ApiHeroesService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    // Obtener el id del Superheroe

    const HeroID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.AHService.getHeroe(HeroID));
    console.log(`${this.urlApiHeroes}${this.idApiHeores}${HeroID}`);

    this.DetailHero = this.http
      .get(`${this.urlApiHeroes}${this.idApiHeores}${HeroID}`)
      .pipe(
        map((heroe: any) => {
          const DetalleHeroe = {
            image: heroe.image.url,
            name: heroe.name,
            FirstAppear: heroe.biography["first-appearance"],
            Alias: heroe.biography.aliases,
            StatsI: heroe.powerstats.intelligence,
            StatsS: heroe.powerstats.strength,
            StatsSpeed: heroe.powerstats.speed,
            StatsD: heroe.powerstats.durability,
            StatsPower: heroe.powerstats.power,
            StatsCombat: heroe.powerstats.combat,
          };
          this.DetailHero = DetalleHeroe;
          return DetalleHeroe;
        })
      )
      .subscribe((valor) => console.log(valor));
    // console.log(DetalleHeroe)
  }

  ngOnInit(): void {}
}
