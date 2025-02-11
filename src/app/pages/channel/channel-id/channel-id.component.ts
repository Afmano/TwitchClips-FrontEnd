import { Component, inject, type OnInit } from "@angular/core";
import { ChannelService } from "../../../services/api/channel.service";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import type { components } from "../../../../api/schemas";

type Channel = components["schemas"]["Channel"];
@Component({
	selector: "app-channel-id",
	imports: [CommonModule],
	templateUrl: "./channel-id.component.html",
	styleUrl: "./channel-id.component.css",
})
export class ChannelIdComponent implements OnInit {
	private channelService = inject(ChannelService);
	private route = inject(ActivatedRoute);

	channel: Channel | undefined;

	async ngOnInit() {
		const id = this.route.snapshot.params["id"];
		const response = await this.channelService.get(id);
		this.channel = response.data;
	}
}
