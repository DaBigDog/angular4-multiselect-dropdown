import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import { State } from '../models/state-model'

@Injectable()
export class DataService {

    private _states: BehaviorSubject<State[]>;

    constructor() {

    }



    private loadStates() : Array<State> {
        let x: any[] = JSON.parse(this.jsonStates);
        return x.map(this.toState);
    }

    private toState(r : any) : State {
        let s : State = <State>({
            id: r.id,
            name: r.name,
            abbreviation: r.abbreviation
        });
        return s;
    }





    public get allStates() : Observable<State[]> {
        if ("undefined" === typeof this._states) {
            this._states = new BehaviorSubject<State[]>(this.loadStates());
        }
        return this._states.asObservable();
    }


    private get jsonStates() : string {
        return `[
            {
                "id":0,
                "name": "Alabama",
                "abbreviation": "AL"
            },
            {
                "id":1,
                "name": "Alaska",
                "abbreviation": "AK"
            },
            {
                "id":2,
                "name": "American Samoa",
                "abbreviation": "AS"
            },
            {
                "id":3,
                "name": "Arizona",
                "abbreviation": "AZ"
            },
            {
                "id":4,
                "name": "Arkansas",
                "abbreviation": "AR"
            },
            {
                "id":5,
                "name": "California",
                "abbreviation": "CA"
            },
            {
                "id":6,
                "name": "Colorado",
                "abbreviation": "CO"
            },
            {
                "id":7,
                "name": "Connecticut",
                "abbreviation": "CT"
            },
            {
                "id":8,
                "name": "Delaware",
                "abbreviation": "DE"
            },
            {
                "id":9,
                "name": "District Of Columbia",
                "abbreviation": "DC"
            },
            {
                "id":10,
                "name": "Federated States Of Micronesia",
                "abbreviation": "FM"
            },
            {
                "id":11,
                "name": "Florida",
                "abbreviation": "FL"
            },
            {
                "id":12,
                "name": "Georgia",
                "abbreviation": "GA"
            },
            {
                "id":13,
                "name": "Guam",
                "abbreviation": "GU"
            },
            {
                "id":14,
                "name": "Hawaii",
                "abbreviation": "HI"
            },
            {
                "id":15,
                "name": "Idaho",
                "abbreviation": "ID"
            },
            {
                "id":16,
                "name": "Illinois",
                "abbreviation": "IL"
            },
            {
                "id":17,
                "name": "Indiana",
                "abbreviation": "IN"
            },
            {
                "id":18,
                "name": "Iowa",
                "abbreviation": "IA"
            },
            {
                "id":19,
                "name": "Kansas",
                "abbreviation": "KS"
            },
            {
                "id":20,
                "name": "Kentucky",
                "abbreviation": "KY"
            },
            {
                "id":21,
                "name": "Louisiana",
                "abbreviation": "LA"
            },
            {
                "id":22,
                "name": "Maine",
                "abbreviation": "ME"
            },
            {
                "id":23,
                "name": "Marshall Islands",
                "abbreviation": "MH"
            },
            {
                "id":24,
                "name": "Maryland",
                "abbreviation": "MD"
            },
            {
                "id":25,
                "name": "Massachusetts",
                "abbreviation": "MA"
            },
            {
                "id":26,
                "name": "Michigan",
                "abbreviation": "MI"
            },
            {
                "id":27,
                "name": "Minnesota",
                "abbreviation": "MN"
            },
            {
                "id":28,
                "name": "Mississippi",
                "abbreviation": "MS"
            },
            {
                "id":29,
                "name": "Missouri",
                "abbreviation": "MO"
            },
            {
                "id":30,
                "name": "Montana",
                "abbreviation": "MT"
            },
            {
                "id":31,
                "name": "Nebraska",
                "abbreviation": "NE"
            },
            {
                "id":32,
                "name": "Nevada",
                "abbreviation": "NV"
            },
            {
                "id":33,
                "name": "New Hampshire",
                "abbreviation": "NH"
            },
            {
                "id":34,
                "name": "New Jersey",
                "abbreviation": "NJ"
            },
            {
                "id":35,
                "name": "New Mexico",
                "abbreviation": "NM"
            },
            {
                "id":36,
                "name": "New York",
                "abbreviation": "NY"
            },
            {
                "id":37,
                "name": "North Carolina",
                "abbreviation": "NC"
            },
            {
                "id":38,
                "name": "North Dakota",
                "abbreviation": "ND"
            },
            {
                "id":39,
                "name": "Northern Mariana Islands",
                "abbreviation": "MP"
            },
            {
                "id":40,
                "name": "Ohio",
                "abbreviation": "OH"
            },
            {
                "id":41,
                "name": "Oklahoma",
                "abbreviation": "OK"
            },
            {
                "id":42,
                "name": "Oregon",
                "abbreviation": "OR"
            },
            {
                "id":43,
                "name": "Palau",
                "abbreviation": "PW"
            },
            {
                "id":44,
                "name": "Pennsylvania",
                "abbreviation": "PA"
            },
            {
                "id":45,
                "name": "Puerto Rico",
                "abbreviation": "PR"
            },
            {
                "id":46,
                "name": "Rhode Island",
                "abbreviation": "RI"
            },
            {
                "id":47,
                "name": "South Carolina",
                "abbreviation": "SC"
            },
            {
                "id":48,
                "name": "South Dakota",
                "abbreviation": "SD"
            },
            {
                "id":49,
                "name": "Tennessee",
                "abbreviation": "TN"
            },
            {
                "id":50,
                "name": "Texas",
                "abbreviation": "TX"
            },
            {
                "id":51,
                "name": "Utah",
                "abbreviation": "UT"
            },
            {
                "id":52,
                "name": "Vermont",
                "abbreviation": "VT"
            },
            {
                "id":53,
                "name": "Virgin Islands",
                "abbreviation": "VI"
            },
            {
                "id":54,
                "name": "Virginia",
                "abbreviation": "VA"
            },
            {
                "id":55,
                "name": "Washington",
                "abbreviation": "WA"
            },
            {
                "id":56,
                "name": "West Virginia",
                "abbreviation": "WV"
            },
            {
                "id":57,
                "name": "Wisconsin",
                "abbreviation": "WI"
            },
            {
                "id":58,
                "name": "Wyoming",
                "abbreviation": "WY"
            }
        ]`;
    }

}