import { Component, inject, input, ViewChild } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import {
	type Select,
	type SelectChangeEvent,
	SelectModule,
} from "primeng/select";
import { SearchService } from "../../../services/api/search.service";
import type { components } from "../../../../api/schemas";
import { CommonModule } from "@angular/common";

const searchLimit = 3;
type Game = components["schemas"]["Game"];
type Channel = components["schemas"]["Channel"];
type SearchFlags = components["schemas"]["SearchFlags"];
@Component({
	selector: "app-search",
	imports: [SelectModule, RouterModule, CommonModule],
	templateUrl: "./search.component.html",
	styleUrl: "./search.component.scss",
})
export class SearchComponent {
	@ViewChild("searchField") searchField: Select | undefined;
	private router = inject(Router);
	private searchService = inject(SearchService);

	searchType = input<SearchFlags>("All");
	searchResults: (Game | Channel)[] = [];
	isLoading = false;
	isSearched = false;

	async onChange(event: SelectChangeEvent) {
		if (typeof event.value === "string") {
			const query = event.value as string;
			this.searchResults.length = 0;
			this.isSearched = query.length >= searchLimit;
			if (this.isSearched) {
				this.isLoading = true;
				const result = (
					await this.searchService.search(query, this.searchType())
				).data;
				this.isLoading = false;
				if (!this.isSearched) {
					return;
				}

				this.searchResults.length = 0;
				if (result?.games) {
					this.searchResults.push(...result.games);
				}

				if (result?.channels) {
					this.searchResults.push(...result.channels);
				}
			}
		} else {
			const selected = event.value;
			const type = this.returnTypeName(event.value);
			this.router.navigate([type, selected.id]);
		}
	}
	returnTypeName(item: Game | Channel) {
		// biome-ignore lint/suspicious/noExplicitAny:
		return (item as any).broadcasterLogin !== undefined ? "channel" : "game";
	}
	onFocus() {
		this.searchField?.show();
	}
}
