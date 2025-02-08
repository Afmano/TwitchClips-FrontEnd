import { CommonModule } from "@angular/common";
import { Component, type OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import type { MenuItem } from "primeng/api";
import { BreadcrumbModule } from "primeng/breadcrumb";

@Component({
	selector: "app-footer",
	imports: [BreadcrumbModule, RouterModule, CommonModule],
	templateUrl: "./footer.component.html",
	styleUrl: "./footer.component.css",
})
export class FooterComponent implements OnInit {
	items: MenuItem[] | undefined;

	home: MenuItem | undefined;

	ngOnInit() {
		this.items = [
			{ label: "Start", route: "/" },
			{ label: "1", route: "/1" },
			{ label: "2", route: "/2" },
			{ label: "3", route: "/3" },
			{ label: "test", route: "/test" },
		];
	}
}
