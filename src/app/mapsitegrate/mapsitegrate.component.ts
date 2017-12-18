import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapsitegrate',
  templateUrl: './mapsitegrate.component.html',
  styleUrls: ['./mapsitegrate.component.css']
})
export class MapsitegrateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createMaps();
  }

  createMaps() {
      // var mapOptions = {
      //   center: new google.maps.LatLng(51.5, -0.12),
      //   zoom: 10,
      //   mapTypeId: google.maps.MapTypeId.HYBRID
      // }
      // var map = new google.maps.Map(document.getElementById("divMaps"), mapOptions);
    }
}
