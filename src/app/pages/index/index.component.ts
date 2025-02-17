import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { SearchComponent } from "../components/search/search.component";
import { GameGridComponent } from "../components/grids/game-grid/game-grid.component";
import { DividerModule } from "primeng/divider";

@Component({
	selector: "app-index",
	imports: [ButtonModule, SearchComponent, GameGridComponent, DividerModule],
	templateUrl: "./index.component.html",
	styleUrl: "./index.component.scss",
})
export class IndexComponent {}
