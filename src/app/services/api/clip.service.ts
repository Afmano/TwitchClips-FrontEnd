import { inject, Injectable } from "@angular/core";
import { ApiClientService } from "./api-client.service";
import type { components } from "../../../api/schemas";

type ClipSource = components["schemas"]["ClipSource"];
type DateType = components["schemas"]["DateType"];
type DateOptions = { dateType?: DateType; endDate?: Date; startDate?: Date };
@Injectable({
	providedIn: "root",
})
export class ClipService {
	private apiClient = inject(ApiClientService);
	async getClips(id: string, source: ClipSource, dateOptions?: DateOptions) {
		return await this.apiClient.client.GET("/api/Clip/GetClips", {
			params: {
				query: {
					id: id,
					clipSource: source,
					dateType: dateOptions?.dateType,
					endDate: dateOptions?.endDate?.toISOString(),
					startDate: dateOptions?.startDate?.toISOString(),
				},
			},
		});
	}
	async getMaxClips(id: string, source: ClipSource, dateOptions?: DateOptions) {
		return await this.apiClient.client.GET("/api/Clip/GetMaxClips", {
			params: {
				query: {
					id: id,
					clipSource: source,
					dateType: dateOptions?.dateType,
					endDate: dateOptions?.endDate?.toISOString(),
					startDate: dateOptions?.startDate?.toISOString(),
				},
			},
		});
	}
}
