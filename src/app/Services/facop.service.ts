import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class FacopService {

  items!:any;
  set!:any;
  question!:any

  constructor(private fs:AngularFirestore) {
    this.set = fs.collection('key').doc('answerkey').valueChanges();
    this.items = fs.collection('students').valueChanges();
  }

  getlist(): any
  {
    return this.items;
  }

  getset() : any
  {
    return this.set;
  }

}
