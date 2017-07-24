import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RestapiService} from '../../providers/restapi-service'

/**
 * Generated class for the About page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class About {
	user = { name: '', username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' }};
  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiService: RestapiService) {

  }
  saveUser(){
  	this.restapiService.saveUser(this.user).then(result => {
  		console.log("save user result :: " + JSON.stringify(result));
  	},(err)=> {
  		console.log(err);
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About');
  }

}
