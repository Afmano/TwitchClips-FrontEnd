import { Pipe, type PipeTransform } from "@angular/core";

@Pipe({
	name: "numberShortener",
})
export class NumberShortenerPipe implements PipeTransform {
	transform(number: number): string {
		return Intl.NumberFormat("en-US", {
			notation: "compact",
			maximumFractionDigits: 1,
		}).format(number);
	}
}
