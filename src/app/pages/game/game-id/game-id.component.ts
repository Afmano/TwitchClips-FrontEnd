import { Component, inject, type OnInit } from "@angular/core";
import { GameService } from "../../../services/api/game.service";
import { ActivatedRoute } from "@angular/router";
import type { components } from "../../../../api/schemas";
import { CommonModule } from "@angular/common";

type Game = components["schemas"]["Game"];
@Component({
	selector: "app-game-id",
	imports: [CommonModule],
	templateUrl: "./game-id.component.html",
	styleUrl: "./game-id.component.scss",
})
export class GameIdComponent implements OnInit {
	private gameService = inject(GameService);
	private route = inject(ActivatedRoute);

	boxArtWidthToken = "{width}";
	boxArtHeightToken = "{height}";
	boxArtWidth = 520;
	boxArtHeight = 720;
	gameData: Game | undefined;
	boxArtConverted: string | undefined;

	async ngOnInit() {
		const id = this.route.snapshot.params["id"];
		const response = await this.gameService.get(id);
		this.gameData = response.data;
		this.boxArtResize();
	}

	boxArtResize() {
		if (this.gameData?.boxArtUrl?.includes("{width}")) {
			this.boxArtConverted = this.gameData.boxArtUrl
				.replace(this.boxArtHeightToken, this.boxArtHeight.toString())
				.replace(this.boxArtWidthToken, this.boxArtWidth.toString());
		}
	}
}
