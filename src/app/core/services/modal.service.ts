import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {
    loginModalSubject = new Subject<Boolean>();
    constructor() { }

    openLogin() {
        this.loginModalSubject.next(true);
    }

    closeLogin() {
        this.loginModalSubject.next(false);
    }

    getLoginState(): Observable<any> {
        return this.loginModalSubject.asObservable();
    }
}
