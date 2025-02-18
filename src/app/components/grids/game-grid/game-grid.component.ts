import {
	Component,
	inject,
	input,
	type SimpleChanges,
	type OnChanges,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BaseGridComponent } from "../base-grid/base-grid.component";
import { BoxArtPipe } from "../../../pipes/box-art.pipe";
import type { components } from "../../../../api/schemas";
import { GameService } from "../../../services/api/game.service";

type Game = components["schemas"]["Game"];
@Component({
	selector: "app-game-grid",
	imports: [CommonModule, RouterModule, BaseGridComponent, BoxArtPipe],
	templateUrl: "./game-grid.component.html",
	styleUrl: "./game-grid.component.scss",
})
export class GameGridComponent implements OnChanges {
	private gameService = inject(GameService);

	count = input.required<number>();
	games: Game[] | undefined;

	async ngOnChanges(changes: SimpleChanges) {
		this.games = undefined;
		const response = await this.gameService.getTopGames(this.count());
		this.games = response.data;
	}
}
