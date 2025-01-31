import type { Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
	{ path: "/index", component: IndexComponent },
	{ path: "**", component: NotFoundComponent },
];
