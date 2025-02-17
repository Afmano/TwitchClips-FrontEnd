import { Component, inject, input, type OnInit } from "@angular/core";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import type { components } from "../../../../../api/schemas";
import { ClipService } from "../../../../services/api/clip.service";
import { LatinService } from "../../../../services/utils/latin.service";
import { BaseGridComponent } from "../base-grid/base-grid.component";

type SavedClips = components["schemas"]["SavedClip"];
type ClipSource = components["schemas"]["ClipSource"];
@Component({
	selector: "app-clip-grid",
	imports: [CommonModule, CardModule, BaseGridComponent],
	templateUrl: "./clip-grid.component.html",
	styleUrl: "./clip-grid.component.scss",
})
export class ClipGridComponent implements OnInit {
	private clipService = inject(ClipService);
	latinService = inject(LatinService);

	twitchLinkTemplate = "https://www.twitch.tv/";
	id = input.required<string>();
	source = input.required<ClipSource>();
	clips: SavedClips[] | undefined;

	async ngOnInit() {
		const response = await this.clipService.getClips(this.id(), this.source());
		this.clips = response.data;
	}
	getLink(creatorName: string) {
		return this.twitchLinkTemplate + creatorName;
	}
}
