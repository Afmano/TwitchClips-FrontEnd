import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { GameGridComponent } from "../../components/grids/game-grid/game-grid.component";

@Component({
	selector: "app-index",
	imports: [ButtonModule, GameGridComponent],
	templateUrl: "./index.component.html",
	styleUrl: "./index.component.scss",
})
export class IndexComponent {}
