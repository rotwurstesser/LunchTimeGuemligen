import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {

  // Kiko Menu API
  API = {
    GET_MENUS : "https://api.kikoweb.ch/lib/kiko/lunchtime/get_menus.php"
  }

  // Data
  menus = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    //this.loadJquery();
    this.getSvMenus();
  }

  /**
   * @deprecated not used anymore since we use Angular now
   */
  loadJquery = function(){
    /*var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    console.log(script);*/
  }


  /**
   * [getCoopMenus]
   * Gets Sv Menus
   */
  getSvMenus() {
    this.http.get(this.API.GET_MENUS).subscribe(
      (data)=>{
        this.menus = data;
      }
    );
    /*return $.get("https://api.kikoweb.ch/lib/kiko/lunchtime/get_menus.php?mensa=sv").then(function (response) {
        // alt API https://svmeal-api.jmnw.me/api/restaurant/guemligen/meal/0
        //console.log(response.data.offers);
        if (response) {
            $(".defaultMensaText").hide();
            var menus = JSON.parse(response);
            //console.log(menus);
            $("._lunchtimeApp").append("<div class='mensa mensa-sv'></div>");
            $(".mensa-sv").append("<h1>SV Menuplan</h1>");
            $(".mensa-sv").append("<div class='menus'></div>");
            menus.forEach(function (item) {
                $(".mensa-sv .menus").append(createMenuView(item));
            });
        } else {
            $(".defaultMensaText").text("Keine Menüs gefunden");
        }
    });*/
  }

  /**
   * [getCoopMenus]
   * Gets Coop Menus
   */
  getCoopMenus() {
    /*return $.get("https://api.kikoweb.ch/lib/kiko/lunchtime/get_menus.php?mensa=coop").then(function (response) {
        // ALT API http://api.kikoweb.ch/lib/kiko/coopRestaurant/get.php
        var data = JSON.parse(response);
        $("._lunchtimeApp").append("<div class='mensa mensa-coop'></div>");
        $(".mensa-coop").append("<h1>Coop Men&uuml;plan</h1>");
        $(".mensa-coop").append("<div class='menus'></div>");
        data.forEach(function (item) {
            $(".mensa-coop .menus").append(
                createMenuView(item)
            );
        });
        //console.log(data);
    });*/
  }


}
