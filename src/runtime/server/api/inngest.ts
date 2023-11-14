import { serve } from "inngest/nuxt";
import { useRuntimeConfig } from "#imports";
import { useInngest } from "../utils/inngest";

export default defineEventHandler((event) => {
	const inngest = useInngest();
	const config = useRuntimeConfig().inngest;

	return serve({
		client: inngest,
		functions: config.functions,
	});
});
