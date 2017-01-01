import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'venues-home-page',
  templateUrl: './venues.component.html'
})
export class VenuesComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() { }

}