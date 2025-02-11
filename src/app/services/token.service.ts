import { isPlatformBrowser } from "@angular/common";
import { inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class TokenService {
	private readonly platformId = inject(PLATFORM_ID);
	private TOKEN_KEY = "accessToken";

	public setToken(token: string) {
		if (isPlatformBrowser(this.platformId)) {
			localStorage.setItem(this.TOKEN_KEY, token);
		}
	}

	public getToken(): string | null {
		return isPlatformBrowser(this.platformId)
			? localStorage.getItem(this.TOKEN_KEY)
			: null;
	}

	public removeToken() {
		if (isPlatformBrowser(this.platformId)) {
			localStorage.removeItem(this.TOKEN_KEY);
		}
	}
}
