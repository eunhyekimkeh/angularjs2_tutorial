import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls:['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
    @Input() hero: Hero;
    @Output() close= new EventEmitter();
    error : any;
    sub: any;
    navigated = false;// true if navigated here

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
        console.log('HeroDetailComponent 생성');
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if(params['id']!==undefined){
                let id = +params['id'];
                this.navigated=true;
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero);
            }else{
                this.navigated=false;
                this.hero=new Hero();
            }

        });
    }

    save(){
        this.heroService.save(this.hero).then(hero=>{
            this.hero=hero;
            this.goBack(hero);
        }).catch(error=> this.error=error);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack(saveHero:Hero=null) {
        this.close.emit(saveHero);
        if(this.navigated){
            window.history.back();
        }
    }
}