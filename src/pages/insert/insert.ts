import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExpenseProvider} from "../../providers/expense/expense";

/**
 * Generated class for the InsertPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html',
  providers:[ExpenseProvider]
})
export class InsertPage {
  when:string;
  types:Array<category.Type>;
  type:category.Type;
  subtypes:Array<string>;
  subtype:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public provider:ExpenseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertPage');
    this.when="2017-08-17"
    this.provider.getCategories().subscribe(res => {
      console.log("getCategories, result=",res);
      this.types=res;

    });
  }

  changeWhen(date){
    console.log(date);
   
  }

  changeType(ev:category.Type){
    console.log(ev);
    this.subtypes = ev ? ev.subtypes : null;
  }

   changeSubtype(ev){
    console.log(ev);
  }




}
