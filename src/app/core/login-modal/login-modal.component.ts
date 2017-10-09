import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ModalService } from '../services/modal.service';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-login-modal',
    templateUrl: './login-modal.component.html',
    styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
    loginModalOpen = false;

    constructor(public afAuth: AngularFireAuth, public modalService: ModalService) {}

    ngOnInit() {
        this.modalService.getLoginState().subscribe(
            (open) => {this.loginModalOpen = open},
            (error) => {console.log(error)}
        );
    }

    login(authProvider: String) {
        switch (authProvider) {
            case "GOOGLE": {
                this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
                break
            }
            case "GITHUB": {
                this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
                break
            }
            case "FACEBOOK": {
                this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
                break
            }
            case "TWITTER": {
                this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
                break
            }
            default: {
                console.log("Invalid choice");
                break;
            }

        }
        this.afAuth.authState.subscribe(
        (user) => {console.log(user)},
        (error) => {console.log(error)}
        );
    }
    logout() {
        this.afAuth.auth.signOut();
    }

}
