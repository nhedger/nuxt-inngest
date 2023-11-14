export default defineEventHandler(async () => {
	const { emails } = useinngest();

	const result = await emails.send({
		from: "Nicolas Hedger <nicolas@hedger.ch>",
		to: ["nicolas@hedger.ch"],
		subject: "Hello from Nuxt inngest",
		text: "Hello world!",
	});

	console.log(result);
});
