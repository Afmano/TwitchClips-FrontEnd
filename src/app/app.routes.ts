import type { Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SpamContentComponent } from "./test/spam-content/spam-content.component";

export const routes: Routes = [
	{ path: "", component: IndexComponent },
	{ path: "test", component: SpamContentComponent },
	{ path: "**", component: NotFoundComponent },
];
