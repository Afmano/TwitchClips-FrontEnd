import type { MenuItem } from "primeng/api";
import { CommonModule } from "@angular/common";
import { Component, type OnInit } from "@angular/core";
import { Menubar } from "primeng/menubar";
import { BadgeModule } from "primeng/badge";
import { AvatarModule } from "primeng/avatar";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { RouterModule } from "@angular/router";
import { Ripple } from "primeng/ripple";

@Component({
	selector: "app-header",
	imports: [
		Menubar,
		BadgeModule,
		AvatarModule,
		InputTextModule,
		CommonModule,
		ButtonModule,
		RouterModule,
		Ripple,
	],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.css",
})
export class HeaderComponent implements OnInit {
	items: MenuItem[] | undefined;

	ngOnInit() {
		this.items = [
			{
				label: "Home",
				icon: "pi pi-home",
				routerLink: "/",
			},
			{
				label: "Test",
				icon: "pi pi-home",
				routerLink: "/test",
			},
			{
				label: "Search",
				icon: "pi pi-home",
				routerLink: "/search",
			},
			{
				label: "Token",
				icon: "pi pi-home",
				routerLink: "/token",
			},
			{
				label: "Numbers",
				icon: "pi pi-search",
				items: [
					{
						label: "One",
						routerLink: "/1",
					},
					{
						label: "Two",
						routerLink: "/2",
					},
					{
						label: "Three",
						routerLink: "/3",
					},
					{
						separator: true,
					},
					{
						label: "Ten",
						routerLink: "/10",
					},
				],
			},
		];
	}
}
