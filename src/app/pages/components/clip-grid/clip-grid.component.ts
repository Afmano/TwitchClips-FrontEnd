import { Component, inject, input, type OnInit } from "@angular/core";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import type { components } from "../../../../api/schemas";
import { ClipService } from "../../../services/api/clip.service";

type SavedClips = components["schemas"]["SavedClip"];
type ClipSource = components["schemas"]["ClipSource"];
@Component({
	selector: "app-clip-grid",
	imports: [CommonModule, CardModule],
	templateUrl: "./clip-grid.component.html",
	styleUrl: "./clip-grid.component.scss",
})
export class ClipGridComponent implements OnInit {
	private clipService = inject(ClipService);
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
	isLatin(value: string) {
		return value.match(/[a-z]/i);
	}
}
