import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/ui/page/page";
import { Button } from "tns-core-modules/ui/button";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    private wax = true;
    public message = "Wax " + (this.wax ? "On" : "Off");

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    public clickMe(args: EventData): void {
        this.wax = !this.wax;
        this.message = "Wax " + (this.wax ? "On" : "Off");
    }
}
