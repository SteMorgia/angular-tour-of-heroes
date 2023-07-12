import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  hero?: Hero;
  myForm: FormGroup = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.myForm = new FormGroup({
      name: new FormControl(this.hero?.name),
      color: new FormControl(this.hero?.color)
    })


  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  onSubmit() {
    console.log(this.myForm);
  }


}
