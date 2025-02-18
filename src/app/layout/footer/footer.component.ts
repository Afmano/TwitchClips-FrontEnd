import { Component, type OnInit } from "@angular/core";
import { PanelModule } from "primeng/panel";

@Component({
	selector: "app-footer",
	imports: [PanelModule],
	templateUrl: "./footer.component.html",
	styleUrl: "./footer.component.scss",
})
export class FooterComponent implements OnInit {
	ngOnInit() {}
}
