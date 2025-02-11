import { inject, Injectable } from "@angular/core";
import { ApiClientService } from "./api-client.service";

@Injectable({
	providedIn: "root",
})
export class ChannelService {
	private apiClient = inject(ApiClientService);

	async get(id: string) {
		return await this.apiClient.client.GET("/api/Channel/Get/{id}", {
			params: { path: { id: id } },
		});
	}
}
