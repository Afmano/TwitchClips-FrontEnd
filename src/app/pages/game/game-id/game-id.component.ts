import { Component, inject, type OnInit } from "@angular/core";
import { GameService } from "../../../services/api/game.service";
import { ActivatedRoute, type ParamMap } from "@angular/router";
import type { components } from "../../../../api/schemas";
import { CommonModule } from "@angular/common";
import { ClipGridComponent } from "../../components/grids/clip-grid/clip-grid.component";
import { BoxArtPipe } from "../../../pipes/box-art.pipe";
import { CategoryLinkPipe } from "../../../pipes/category-link.pipe";

type Game = components["schemas"]["Game"];
@Component({
	selector: "app-game-id",
	imports: [CommonModule, ClipGridComponent, BoxArtPipe, CategoryLinkPipe],
	templateUrl: "./game-id.component.html",
	styleUrl: "./game-id.component.scss",
})
export class GameIdComponent implements OnInit {
	private route = inject(ActivatedRoute);
	private gameService = inject(GameService);

	gameData: Game | undefined;

	async ngOnInit() {
		this.route.paramMap.subscribe(async (params: ParamMap) => {
			const id = params.get("id");
			if (!id) {
				return;
			}

			const response = await this.gameService.get(id);
			this.gameData = response.data;
		});
	}
}
