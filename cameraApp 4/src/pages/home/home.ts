import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
	public base64Image: string;

  constructor(public navCtrl: NavController, public camera: Camera) {
  	this.camera = camera;
  }

  options: CameraOptions = {
    quality: 100,
    targetWidth: 1000,
    targetHeight: 1000,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  takePicture(){
  	this.camera.getPicture(this.options).then((imageData) =>{
  		this.base64Image = "data:image/jpeg;base64," + imageData;
  	},(err) => {
  		console.log(err);
  	});
  }

}
