import { inject, Injectable } from "@angular/core";
import { ApiClientService } from "./api-client.service";

@Injectable({
	providedIn: "root",
})
export class GameService {
	private apiClient = inject(ApiClientService);

	async get(id: string) {
		return await this.apiClient.client.GET("/api/Game/Get/{id}", {
			params: { path: { id: id } },
		});
	}
}
