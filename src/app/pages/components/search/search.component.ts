import { Component, type OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
	type AutoCompleteCompleteEvent,
	type AutoCompleteLazyLoadEvent,
	AutoCompleteModule,
} from "primeng/autocomplete";

interface TestSelected {
	id: number;
	value: string;
	label: string;
}

@Component({
	selector: "app-search",
	imports: [AutoCompleteModule, FormsModule],
	templateUrl: "./search.component.html",
	styleUrl: "./search.component.css",
})
export class SearchComponent implements OnInit {
	testValues!: TestSelected[];
	filteredValues!: TestSelected[];
	selectedValue: TestSelected | undefined;
	isLoading = false;

	ngOnInit() {
		this.testValues = [
			{ id: 1, value: "test1", label: "1" },
			{ id: 2, value: "test2", label: "2" },
			{ id: 3, value: "test3", label: "3" },
		];
	}

	filterValue(event: AutoCompleteCompleteEvent) {
		const query = event.query;
		this.filteredValues = this.testValues.filter((item) =>
			item.value.includes(query),
		);
	}
	lazyLoad(event: AutoCompleteLazyLoadEvent) {
		console.log(event);
	}
}
