import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AnsuploadService {

  constructor(public fs:AngularFirestore) { }

  addanswer(q1:any,q2:any,q3:any,q4:any,q5:any)
  {
    this.fs.collection('students').doc('rithiv').set({
      'q1':q1,
      'q2':q2,
      'q3':q3,
      'q4':q4,
      'q5':q5,
    });
  }

}
