import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2";
import { Response } from '@angular/http';

@Injectable()
export class DemoService {
    constructor(private db: AngularFireDatabase) { }

    /*
    Ejemplo de filtro. Usar como segundo parámetro de db.list().
    {
                query: { orderByChild: 'telefono', equalTo: '01' }
            }
    */
    getUsers(): Observable<any[]> {
        return this.db.list('usuarios')
            .do(data => console.log(data))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}