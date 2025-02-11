import { RenderMode, type ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
	{
		path: "game/:id",
		renderMode: RenderMode.Server,
	},
	{
		path: "channel/:id",
		renderMode: RenderMode.Server,
	},
	{
		path: "**",
		renderMode: RenderMode.Prerender,
	},
];
