import { Inngest } from "inngest";
import { useRuntimeConfig } from "#imports";

export const useInngest = () => {
	const { functions, ...config } = useRuntimeConfig().inngest;
	return new Inngest(config);
};
