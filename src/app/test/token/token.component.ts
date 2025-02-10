import { Component } from "@angular/core";
import { TokenService } from "../../services/token.service";
import { ApiClientService } from "../../services/api-client.service";
import { ButtonModule } from "primeng/button";
import { MessageService } from "primeng/api";
import { InputGroup } from "primeng/inputgroup";
import { InputTextModule } from "primeng/inputtext";

@Component({
	selector: "app-token",
	imports: [ButtonModule, InputGroup, InputTextModule],
	templateUrl: "./token.component.html",
	styleUrl: "./token.component.css",
})
export class TokenComponent {
	constructor(
		private tokenService: TokenService,
		private apiClient: ApiClientService,
		private messageService: MessageService,
	) {}
	getToken() {
		const token = this.tokenService.getToken();
		if (token !== null) {
			this.messageService.add({
				severity: "info",
				summary: "Token received",
				detail: token,
			});
		} else {
			this.messageService.add({
				severity: "error",
				summary: "Token doesn't exist",
			});
		}
	}
	setToken(value: string) {
		this.tokenService.setToken(value);
		this.messageService.add({
			severity: "info",
			summary: "Token setted",
			detail: value,
		});
	}
	checkRequest(searchValue: string) {
		this.apiClient.apiClient
			.GET("/api/Search", {
				params: { query: { searchType: "All", searchValue: searchValue } },
			})
			.then((res) =>
				this.messageService.add({
					severity: "success",
					summary: "Request successful",
				}),
			)
			.catch((err) =>
				this.messageService.add({
					severity: "error",
					summary: "Error while processing request",
				}),
			);
	}
}
