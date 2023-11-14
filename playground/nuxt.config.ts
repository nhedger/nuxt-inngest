export default defineNuxtConfig({
	modules: ["../src/module"],
	inngest: {
		apiKey: "YOUR_API_KEY",
	},
	devtools: { enabled: true },
});
