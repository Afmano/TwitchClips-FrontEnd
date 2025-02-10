import { Injectable } from "@angular/core";
import { ApiClientService } from "./api-client.service";
import type { components } from "../../../api/schemas";

@Injectable({
	providedIn: "root",
})
export class SearchService {
	constructor(private apiClient: ApiClientService) {}
	async search(
		searchValue: string,
		searchType: components["schemas"]["SearchFlags"],
	) {
		return await this.apiClient.client.GET("/api/Search", {
			params: { query: { searchType: searchType, searchValue: searchValue } },
		});
	}
}
