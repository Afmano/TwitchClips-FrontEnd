import type { Routes } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { SpamContentComponent } from "./test/spam-content/spam-content.component";
import { SearchComponent } from "./pages/components/search/search.component";
import { TokenComponent } from "./test/token/token.component";

export const routes: Routes = [
	{ path: "", component: IndexComponent },
	{ path: "test", component: SpamContentComponent },
	{ path: "search", component: SearchComponent },
	{ path: "token", component: TokenComponent },
	{ path: "**", component: NotFoundComponent },
];
