import { Injectable } from "@angular/core";
import type { components } from "../../../api/schemas";

type Game = components["schemas"]["Game"];
@Injectable({
	providedIn: "root",
})
export class BoxArtService {
	boxArtWidthToken = "{width}";
	boxArtHeightToken = "{height}";
	boxArtWidth = 260;
	boxArtHeight = 360;

	boxArtResize(game: Game) {
		if (!game.boxArtUrl) {
			throw new Error("No box art to convert.");
		}

		if (
			game.boxArtUrl.includes(this.boxArtWidthToken) ||
			game.boxArtUrl.includes(this.boxArtHeightToken)
		) {
			return game.boxArtUrl
				.replace(this.boxArtHeightToken, this.boxArtHeight.toString())
				.replace(this.boxArtWidthToken, this.boxArtWidth.toString());
		}

		return game.boxArtUrl;
	}
}
