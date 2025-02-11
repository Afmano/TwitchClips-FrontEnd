import { Component, inject } from "@angular/core";
import { ToastModule } from "primeng/toast";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { MessageService } from "primeng/api";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, HeaderComponent, FooterComponent, ToastModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
	providers: [MessageService],
})
export class AppComponent {
	private messageService = inject(MessageService);

	title = "TwitchClips";
}
