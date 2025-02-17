import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class LatinService {
	isLatin(value: string) {
		return value.match(/[a-z]/i);
	}
}
