import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import createClient, { type Middleware } from "openapi-fetch";
import type { paths } from "../../../api/schemas";
import { TokenService } from ".././token.service";

@Injectable({
	providedIn: "root",
})
export class ApiClientService {
	public tokenService = inject(TokenService);
	public client = createClient<paths>({ baseUrl: environment.apiUrl });
	private authMiddleware: Middleware = {
		onRequest: async ({ request }) => {
			const accessToken = this.tokenService.getToken();
			if (accessToken) {
				request.headers.set("Authorization", `Bearer ${accessToken}`);
			}
			return request;
		},
	};

	constructor() {
		this.client.use(this.authMiddleware);
	}
}
