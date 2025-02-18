import type { Routes } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { TokenComponent } from "./test/token/token.component";
import { ChannelIdComponent } from "./pages/channel/channel-id/channel-id.component";
import { ChannelNoneComponent } from "./pages/channel/channel-none/channel-none.component";
import { GameIdComponent } from "./pages/game/game-id/game-id.component";
import { GameNoneComponent } from "./pages/game/game-none/game-none.component";

export const routes: Routes = [
	{ path: "", component: IndexComponent },
	{ path: "token", component: TokenComponent },
	{ path: "game", component: GameNoneComponent },
	{ path: "game/:id", component: GameIdComponent },
	{ path: "channel", component: ChannelNoneComponent },
	{ path: "channel/:id", component: ChannelIdComponent },
	{ path: "**", component: NotFoundComponent },
];
