import { Component, inject } from "@angular/core";
import { ApiClientService } from "../../services/api/api-client.service";
import { ButtonModule } from "primeng/button";
import { MessageService } from "primeng/api";
import { InputGroup } from "primeng/inputgroup";
import { InputTextModule } from "primeng/inputtext";

@Component({
	selector: "app-token",
	imports: [ButtonModule, InputGroup, InputTextModule],
	templateUrl: "./token.component.html",
	styleUrl: "./token.component.scss",
})
export class TokenComponent {
	private apiClient = inject(ApiClientService);
	private messageService = inject(MessageService);
	getToken() {
		const token = this.apiClient.tokenService.getToken();
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
		this.apiClient.tokenService.setToken(value);
		this.messageService.add({
			severity: "info",
			summary: "Token setted",
			detail: value,
		});
	}
	checkRequest(searchValue: string) {
		this.apiClient.client
			.GET("/api/Search", {
				params: { query: { searchType: "All", searchValue: searchValue } },
			})
			.then((res) =>
				this.messageService.add({
					severity: "success",
					summary: "Request successful",
					detail: res.data as string,
				}),
			)
			.catch((err) =>
				this.messageService.add({
					severity: "error",
					summary: "Error while processing request",
					detail: err,
				}),
			);
	}
}
