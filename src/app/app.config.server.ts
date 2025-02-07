import { mergeApplicationConfig, type ApplicationConfig } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideServerRendering } from "@angular/platform-server";
import { provideServerRouting } from "@angular/ssr";
import { appConfig } from "./app.config";
import { serverRoutes } from "./app.routes.server";
import { providePrimeNG } from "primeng/config";
import Aura from "@primeng/themes/aura";

const serverConfig: ApplicationConfig = {
	providers: [
		provideServerRendering(),
		provideServerRouting(serverRoutes),
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: Aura,
			},
		}),
	],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
