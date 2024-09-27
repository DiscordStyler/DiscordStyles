export default {
	meta: {
		name: 'Ultra',
		author: 'jw0902',
		version: '1.0.0',
		description: 'My cool theme',
		source: 'https://github.com/DiscordStyler/DiscordStyles',
	},
	base: {
		target: "themes/Ultra/base.scss",
		output: 'dist/Ultra'
	},
    dist: {
        target: "themes/Ultra/dist.scss",
        output: "dist/Ultra",
    },
	dev: {
        target: "themes/Ultra/dev.scss",
        output: "dist/Ultra",
    },
	baseImport: 'https://discordstyler.github.io/DiscordStyles/Ultra/Ultra.css',
    addons: [
		['themes/Ultra/addons/_banners.scss', 'dist/Ultra/Banners.css'],
		['themes/Ultra/addons/_betterInvites.scss', 'dist/Ultra/BetterInvites.css'],
		['themes/Ultra/addons/_touchup.scss', 'dist/Ultra/TouchUp.css'],
        ['themes/ultra/addons/_userBadges.scss', 'dist/Ultra/UserBadges.css'],
	]
};