import {
	Component,
	inject,
	input,
	type OnChanges,
	type SimpleChanges,
} from "@angular/core";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import { DialogModule } from "primeng/dialog";
import { RouterModule } from "@angular/router";
import type { components } from "../../../../api/schemas";
import { SafePipe } from "../../../pipes/safe.pipe";
import { NumberShortenerPipe } from "../../../pipes/number-shortener.pipe";
import { ClipService } from "../../../services/api/clip.service";
import { BaseGridComponent } from "../base-grid/base-grid.component";
import { environment } from "../../../../environments/environment";

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
		NumberShortenerPipe,
	],
	templateUrl: "./clip-grid.component.html",
	styleUrl: "./clip-grid.component.scss",
})
export class ClipGridComponent implements OnChanges {
	private clipService = inject(ClipService);

	id = input.required<string>();
	source = input.required<ClipSource>();
	linkTemplate = "https://www.twitch.tv/";
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
