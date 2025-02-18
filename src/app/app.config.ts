import {
	type ApplicationConfig,
	provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {
	provideClientHydration,
	withEventReplay,
} from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { providePrimeNG } from "primeng/config";
import Aura from "@primeng/themes/aura";
import { definePreset } from "@primeng/themes";
const ThemePreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: "{purple.50}",
			100: "{purple.100}",
			200: "{purple.200}",
			300: "{purple.300}",
			400: "{purple.400}",
			500: "{purple.500}",
			600: "{purple.600}",
			700: "{purple.700}",
			800: "{purple.800}",
			900: "{purple.900}",
			950: "{purple.950}",
		},
	},
});

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration(withEventReplay()),
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: ThemePreset,
				options: {
					cssLayer: {
						name: "components",
					},
				},
			},
			ripple: true,
		}),
	],
};
