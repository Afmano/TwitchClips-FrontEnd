import { Pipe, type PipeTransform } from "@angular/core";

@Pipe({
	name: "categoryLink",
})
export class CategoryLinkPipe implements PipeTransform {
	categoryLinkTemplate = "https://www.twitch.tv/directory/category/";
	replaceDictionary: { [key: string]: string } = {
		" ": "-",
		":": "",
		"+": "",
		"'": "",
		"/": "-",
		é: "e",
		"&": "and",
	};
	stopWords = ["version"];
	transform(categoryName: string) {
		const lowerCatName = categoryName.toLowerCase();
		if (this.stopWords.some((word) => lowerCatName.includes(word))) {
			return null;
		}

		return (
			this.categoryLinkTemplate +
			Object.keys(this.replaceDictionary).reduce((prev, current) => {
				return prev.replace(
					new RegExp(`[${current}]`, "g"),
					this.replaceDictionary[current],
				);
			}, lowerCatName)
		);
	}
}
