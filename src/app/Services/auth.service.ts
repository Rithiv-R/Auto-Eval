import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afs:AngularFirestore,
    public afAuth:AngularFireAuth,
    public router:Router,) { }

    async SignIn(email:string,password:string,pid:string)
    {
        this.afAuth.signInWithEmailAndPassword(email,password).then((val)=>{
          this.router.navigate(['productadd',pid]);
       })
       .catch((error)=>{
         window.alert(error.message);
       })
    }

    async SignOut()
   {
     this.afAuth.signOut().then(()=>{
      this.router.navigate(['home']);
     })
     
   }

}
