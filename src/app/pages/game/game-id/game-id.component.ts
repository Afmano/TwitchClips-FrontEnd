import { Component, inject, type OnInit } from "@angular/core";
import { GameService } from "../../../services/api/game.service";
import { ActivatedRoute } from "@angular/router";
import type { components } from "../../../../api/schemas";
import { CommonModule } from "@angular/common";
import { ClipGridComponent } from "../../components/grids/clip-grid/clip-grid.component";
import { CategoryLinkService } from "../../../services/utils/category-link.service";
import { BoxArtService } from "../../../services/utils/box-art.service";

type Game = components["schemas"]["Game"];
@Component({
	selector: "app-game-id",
	imports: [CommonModule, ClipGridComponent],
	templateUrl: "./game-id.component.html",
	styleUrl: "./game-id.component.scss",
})
export class GameIdComponent implements OnInit {
	private route = inject(ActivatedRoute);
	private gameService = inject(GameService);
	private categoryLinkService = inject(CategoryLinkService);
	boxArtService = inject(BoxArtService);

	gameData: Game | undefined;
	twitchCategoryLinkTemplate = "https://www.twitch.tv/directory/category/";

	async ngOnInit() {
		const id = this.route.snapshot.params["id"];
		const response = await this.gameService.get(id);
		this.gameData = response.data;
	}

	getLink(catName: string) {
		return (
			this.twitchCategoryLinkTemplate +
			this.categoryLinkService.transformCatName(catName)
		);
	}
}
