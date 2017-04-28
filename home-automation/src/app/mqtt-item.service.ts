import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MqttItemService {

    private url: string = "/devices/api/v1";

    constructor(private http: Http) {
    }

    updateState(state: string): Observable<Response> {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this
            .http
            .put(this.url + "/sonoff1",
                state,
                {headers}
            );
    }
}