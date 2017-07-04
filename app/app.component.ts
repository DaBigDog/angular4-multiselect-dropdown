import { Component , AfterViewInit} from '@angular/core';

import { DataService } from './services/data.service';
import { State } from './models/state-model'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent { 

    private title: string = "Angular 4 Multiselect Dropdown"

    private states: Array<State> = new Array<State>();
    private selectedStates: Array<State> = new Array<State>();

    constructor(private dataService : DataService) {

        this.dataService.allStates.subscribe(s => {
            this.states = s;
            this.states.unshift(this.allStatesOption);
        });

    }


// Return checked flag for selection.
    private isChecked(stateId: number): boolean {
        let flag: boolean = (this.selectedStates.filter(x => x.id === stateId).length > 0);
        return flag;
    }


    // Process dropdown change.
    public onChangeStates(isChecked: boolean, st: State): void {

         if (isChecked) {
            // Add to array
            if (st.id == this.allStatesOption.id) {
                // copy states array
                this.selectedStates = this.states.slice();
            } else {
                this.selectedStates.push(st); 
            }
        } else {
            // Remove from array
            if (st.id == this.allStatesOption.id) {
                // remove all states since All option unchecked
                this.selectedStates = new Array<State>();
            } else {
                // remove state from Array.
                this.removeSelectedState(st.id);
                // now remove All if selected...
                this.removeSelectedState(this.allStatesOption.id);
            }

        }
    }

    private removeSelectedState(id: number) : void {
        let i: number = this.selectedStates.findIndex(s => s.id === id);
        if (-1 < i) { this.selectedStates.splice(i, 1); }
    }


    private get concatenatedStates(): string {
        let s: string = "";
        if (undefined !== this.selectedStates && 0 < this.selectedStates.length) {
            s = this.selectedStates.filter(z => z.id !== this.allStatesOption.id).slice().sort((n1, n2): number => {
                if (n1.id < n2.id) return -1;
                if (n1.id > n2.id) return 1;
            }).map(o => { return o.abbreviation; }).join(", ");
        }
        return s;
    }

    private get allStatesOption(): State {
        let s: State = new State();
        s.id = -99;
        s.abbreviation = "All";
        s.name = "All States";
        return s;
    }

}
