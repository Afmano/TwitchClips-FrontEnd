import { Component, inject, input, type OnInit } from "@angular/core";
import { GameService } from "../../../../services/api/game.service";
import type { components } from "../../../../../api/schemas";
import { BoxArtService } from "../../../../services/utils/box-art.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BaseGridComponent } from "../base-grid/base-grid.component";

type Game = components["schemas"]["Game"];
@Component({
	selector: "app-game-grid",
	imports: [CommonModule, RouterModule, BaseGridComponent],
	templateUrl: "./game-grid.component.html",
	styleUrl: "./game-grid.component.scss",
})
export class GameGridComponent implements OnInit {
	private gameService = inject(GameService);
	boxArtService = inject(BoxArtService);

	count = input<number>(20);
	games: Game[] | undefined;

	async ngOnInit() {
		const response = await this.gameService.getTopGames(this.count());
		this.games = response.data;
	}
}
