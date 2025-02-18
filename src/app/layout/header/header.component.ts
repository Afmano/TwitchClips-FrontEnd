import type { MenuItem } from "primeng/api";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Menubar } from "primeng/menubar";
import { RouterModule } from "@angular/router";
import { SearchComponent } from "../../components/search/search.component";

@Component({
	selector: "app-header",
	imports: [Menubar, CommonModule, RouterModule, SearchComponent],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {
	items: MenuItem[] = [
		{
			label: "Home",
			icon: "pi pi-home",
			routerLink: "/",
		},
		{
			label: "Games",
			icon: "pi pi-hashtag",
			routerLink: "/game",
		},
		{
			label: "Channels",
			icon: "pi pi-user",
			routerLink: "/channel",
		},
		{
			label: "Token Test",
			icon: "pi pi-search",
			routerLink: "/token",
		},
	];
}
