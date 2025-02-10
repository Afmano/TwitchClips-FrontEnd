import { Component, type OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { type SelectChangeEvent, SelectModule } from "primeng/select";

interface TestSelected {
	id: number;
	value: string;
	label: string;
	route: string;
}
const searchLimit = 3;

@Component({
	selector: "app-search",
	imports: [SelectModule, RouterModule],
	templateUrl: "./search.component.html",
	styleUrl: "./search.component.css",
})
export class SearchComponent implements OnInit {
	testValues!: TestSelected[];
	filteredValues: TestSelected[] | undefined;
	isLoading = false;

	constructor(private router: Router) {}

	ngOnInit() {
		this.testValues = [
			{ id: 1, value: "test1", label: "1 test", route: "route1" },
			{ id: 2, value: "test2", label: "2 test", route: "route2" },
			{ id: 3, value: "test3", label: "3 test", route: "route3" },
		];
	}

	onChange(event: SelectChangeEvent) {
		if (typeof event.value === "string") {
			const query = event.value as string;
			console.log(event.value);
			if (query.length >= searchLimit) {
				this.isLoading = true;
			} else {
				this.isLoading = false;
			}
		} else {
			const selected = event.value as TestSelected;
			this.router.navigate([selected.route]);
		}
	}
}
