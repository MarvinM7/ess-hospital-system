import { Component, OnInit } from '@angular/core';
import{ getAuth, onAuthStateChanged} from 'firebase/auth'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user) {
        const uid = user.uid;
      } else{

      }
    }); 
  }

}
