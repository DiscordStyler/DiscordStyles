export default {
	meta: {
		name: 'ClearVision',
		author: 'jw0902',
		version: '1.0.0',
		description: 'My cool theme',
		source: 'https://github.com/DiscordStyler/DiscordStyles',
	},
	base: {
		target: "src/themes/ClearVision/base.scss",
		output: 'dist/ClearVision'
	},
    dist: {
        target: "src/themes/ClearVision/dist.scss",
        output: "dist/ClearVision",
    },
	// dev: {
    //     target: "themes/ClearVision/dev.scss",
    //     output: "dist/ClearVision",
    // },
	baseImport: 'https://discordstyler.github.io/DiscordStyles/ClearVision/ClearVision.css',
};