import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { SearchComponent } from "../components/search/search.component";

@Component({
	selector: "app-index",
	imports: [ButtonModule, SearchComponent],
	templateUrl: "./index.component.html",
	styleUrl: "./index.component.css",
})
export class IndexComponent {}
