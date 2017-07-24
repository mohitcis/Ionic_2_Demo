import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestapiService} from '../../providers/restapi-service';
import {About} from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	users: any;
  constructor(public navCtrl: NavController, public restapiService : RestapiService) {
  	this.getUsers();
    this.navCtrl = navCtrl;
  }
  getUsers(){
  	this.restapiService.getUsers().then(data =>{
  		this.users = data;
  	});
  }

  goToAbout(user){
    console.log("User detail :: " + JSON.stringify(user));
    this.navCtrl.push(About);
  }

}
