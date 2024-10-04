export default {
	meta: {
		name: 'Ultra',
		author: 'jw0902',
		version: '1.0.0',
		description: 'My cool theme',
		source: 'https://github.com/DiscordStyler/DiscordStyles',
	},
	base: {
		target: "src/themes/Ultra/base.scss",
		output: 'dist/Ultra'
	},
    dist: {
        target: "src/themes/Ultra/dist.scss",
        output: "dist/Ultra",
    },
	// dev: {
    //     target: "themes/Ultra/dev.scss",
    //     output: "dist/Ultra",
    // },
	baseImport: 'https://discordstyler.github.io/DiscordStyles/Ultra/Ultra.css',
    addons: [
		['src/themes/Ultra/addons/_banners.scss', 'dist/Ultra/Banners.css'],
		['src/themes/Ultra/addons/_betterInvites.scss', 'dist/Ultra/BetterInvites.css'],
		['src/themes/Ultra/addons/_touchup.scss', 'dist/Ultra/TouchUp.css'],
        ['src/themes/Ultra/addons/_userBadges.scss', 'dist/Ultra/UserBadges.css'],
	]
};