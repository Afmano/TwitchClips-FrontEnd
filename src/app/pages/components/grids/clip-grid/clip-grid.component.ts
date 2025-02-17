import {
	Component,
	inject,
	input,
	type OnChanges,
	type SimpleChanges,
} from "@angular/core";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import type { components } from "../../../../../api/schemas";
import { ClipService } from "../../../../services/api/clip.service";
import { LatinService } from "../../../../services/utils/latin.service";
import { BaseGridComponent } from "../base-grid/base-grid.component";
import { DialogModule } from "primeng/dialog";
import { SafePipe } from "../../../../pipes/safe.pipe";
import { environment } from "../../../../../environments/environment";
import { RouterModule } from "@angular/router";

type SavedClip = components["schemas"]["SavedClip"];
type ClipSource = components["schemas"]["ClipSource"];
@Component({
	selector: "app-clip-grid",
	imports: [
		CommonModule,
		CardModule,
		BaseGridComponent,
		DialogModule,
		SafePipe,
		RouterModule,
	],
	templateUrl: "./clip-grid.component.html",
	styleUrl: "./clip-grid.component.scss",
})
export class ClipGridComponent implements OnChanges {
	private clipService = inject(ClipService);
	latinService = inject(LatinService);

	linkTemplate = "https://www.twitch.tv/";
	id = input.required<string>();
	source = input.required<ClipSource>();
	clips: SavedClip[] | undefined;
	isClipDialog = false;
	selectedClip: SavedClip | undefined;

	async ngOnChanges(changes: SimpleChanges) {
		this.clips = undefined;
		const response = await this.clipService.getClips(this.id(), this.source());
		this.clips = response.data;
	}
	getLink(creatorName: string) {
		return this.linkTemplate + creatorName;
	}
	onClipClick(clip: SavedClip) {
		console.log("Clicked on clip");
		this.isClipDialog = true;
		this.selectedClip = clip;
	}
	clipEmbedmentSource(clip: SavedClip) {
		return `${clip.embedUrl}&parent=${environment.apiUrlSignature}`;
	}
}
