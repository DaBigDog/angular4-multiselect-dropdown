"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var data_service_1 = require("./services/data.service");
var state_model_1 = require("./models/state-model");
var AppComponent = (function () {
    function AppComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.title = "Angular 4 Multiselect Dropdown";
        this.states = new Array();
        this.selectedStates = new Array();
        this.dataService.allStates.subscribe(function (s) {
            _this.states = s;
            _this.states.unshift(_this.allStatesOption);
        });
    }
    // Return checked flag for selection.
    AppComponent.prototype.isChecked = function (stateId) {
        var flag = (this.selectedStates.filter(function (x) { return x.id === stateId; }).length > 0);
        return flag;
    };
    // Process dropdown change.
    AppComponent.prototype.onChangeStates = function (isChecked, st) {
        if (isChecked) {
            // Add to array
            if (st.id == this.allStatesOption.id) {
                // copy states array
                this.selectedStates = this.states.slice();
            }
            else {
                this.selectedStates.push(st);
            }
        }
        else {
            // Remove from array
            if (st.id == this.allStatesOption.id) {
                // remove all states since All option unchecked
                this.selectedStates = new Array();
            }
            else {
                // remove state from Array.
                this.removeSelectedState(st.id);
                // now remove All if selected...
                this.removeSelectedState(this.allStatesOption.id);
            }
        }
    };
    AppComponent.prototype.removeSelectedState = function (id) {
        var i = this.selectedStates.findIndex(function (s) { return s.id === id; });
        if (-1 < i) {
            this.selectedStates.splice(i, 1);
        }
    };
    Object.defineProperty(AppComponent.prototype, "concatenatedStates", {
        get: function () {
            var _this = this;
            var s = "";
            if (undefined !== this.selectedStates && 0 < this.selectedStates.length) {
                s = this.selectedStates.filter(function (z) { return z.id !== _this.allStatesOption.id; }).slice().sort(function (n1, n2) {
                    if (n1.id < n2.id)
                        return -1;
                    if (n1.id > n2.id)
                        return 1;
                }).map(function (o) { return o.abbreviation; }).join(", ");
            }
            return s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "allStatesOption", {
        get: function () {
            var s = new state_model_1.State();
            s.id = -99;
            s.abbreviation = "All";
            s.name = "All States";
            return s;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.selectState = function (state) {
        this.selectedState = state;
        console.log(this.selectedState);
        return false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map