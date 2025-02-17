import { Component, inject, type OnInit } from "@angular/core";
import { ChannelService } from "../../../services/api/channel.service";
import { ActivatedRoute, type ParamMap } from "@angular/router";
import { CommonModule } from "@angular/common";
import type { components } from "../../../../api/schemas";
import { ClipGridComponent } from "../../components/grids/clip-grid/clip-grid.component";

type Channel = components["schemas"]["ChannelResponse"];
@Component({
	selector: "app-channel-id",
	imports: [CommonModule, ClipGridComponent],
	templateUrl: "./channel-id.component.html",
	styleUrl: "./channel-id.component.scss",
})
export class ChannelIdComponent implements OnInit {
	private channelService = inject(ChannelService);
	private route = inject(ActivatedRoute);

	channel: Channel | undefined;
	twitchLinkTemplate = "https://www.twitch.tv/";

	async ngOnInit() {
		this.route.paramMap.subscribe(async (params: ParamMap) => {
			const id = params.get("id");
			if (!id) {
				return;
			}

			const response = await this.channelService.get(id);
			this.channel = response.data;
		});
	}
	getLink(creatorName: string) {
		return this.twitchLinkTemplate + creatorName;
	}
}
