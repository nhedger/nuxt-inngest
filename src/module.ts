import {
	addServerHandler,
	addServerImports,
	createResolver,
	defineNuxtModule,
} from "@nuxt/kit";
import defu from "defu";
import { type ClientOptions } from "inngest";

// export interface ModuleOptions extends Partial<ClientOptions> {
// 	functions?: string[];
// }

export default defineNuxtModule<ClientOptions & { functions?: string[] }>({
	meta: {
		name: "nuxt-inngest",
		configKey: "inngest",
	},
	defaults: {
		id: "",
		functions: [],
	},
	setup(options, nuxt) {
		const resolver = createResolver(import.meta.url);

		nuxt.options.runtimeConfig.inngest = defu(
			nuxt.options.runtimeConfig.inngest,
			options,
		);

		addServerImports([
			{
				name: "useInngest",
				as: "useInngest",
				from: resolver.resolve("./runtime/server/utils/inngest"),
			},
		]);

		addServerHandler({
			route: "/api/inngest",
			handler: resolver.resolve("./runtime/server/api/inngest"),
		});
	},
});
