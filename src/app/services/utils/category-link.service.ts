import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class CategoryLinkService {
	transformCatName(catName: string) {
		return catName
			.toLowerCase()
			.replaceAll(" ", "-")
			.replaceAll(":", "")
			.replaceAll("+", "")
			.replaceAll("'", "")
			.replaceAll("/", "")
			.replaceAll("é", "e")
			.replaceAll("&", "and");
	}
}
