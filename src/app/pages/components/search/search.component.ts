import { Component, input } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { type SelectChangeEvent, SelectModule } from "primeng/select";
import { SearchService } from "../../../services/api/search.service";
import type { components } from "../../../../api/schemas";
import { CommonModule } from "@angular/common";
import { MessageService } from "primeng/api";

const searchLimit = 3;
type SearchResponse = components["schemas"]["SearchResponse"];
type Game = components["schemas"]["Game"];
type Channel = components["schemas"]["Channel"];
@Component({
	selector: "app-search",
	imports: [SelectModule, RouterModule, CommonModule],
	templateUrl: "./search.component.html",
	styleUrl: "./search.component.css",
})
export class SearchComponent {
	searchType = input<components["schemas"]["SearchFlags"]>("All");
	searchResults: (Game | Channel)[] = [];
	isLoading = false;

	constructor(
		private router: Router,
		private searchService: SearchService,
		private messageService: MessageService,
	) {}

	async onChange(event: SelectChangeEvent) {
		if (typeof event.value === "string") {
			const query = event.value as string;
			console.log(event.value);
			if (query.length >= searchLimit) {
				this.isLoading = true;
				this.searchResults.length = 0;
				const result = (
					await this.searchService.search(query, this.searchType())
				).data;

				if (result?.games) {
					this.searchResults.push(...result.games);
				}

				if (result?.channels) {
					this.searchResults.push(...result.channels);
				}

				this.isLoading = false;
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
}
