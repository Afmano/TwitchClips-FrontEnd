import { Component, input } from "@angular/core";

@Component({
	selector: "app-search-item",
	imports: [],
	templateUrl: "./search-item.component.html",
	styleUrl: "./search-item.component.scss",
})
export class SearchItemComponent {
	image = input.required<string>();
	name = input.required<string>();
}
