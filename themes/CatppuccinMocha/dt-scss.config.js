export default {
  meta: {
    name: 'Catppuccin Mocha',
    author: 'jw0902',
    version: '0.1.0',
    description: '🎮 Soothing pastel theme for Discord',
    source: 'https://github.com/DiscordStyler/DiscordStyles',
  },
  base: {
    target: "themes/CatppuccinMocha/base.scss",
    output: 'dist/CatppuccinMocha'
  },
  dist: {
    target: "themes/CatppuccinMocha/dist.scss",
    output: "dist/CatppuccinMocha",
  },
  baseImport: 'https://discordstyler.github.io/DiscordStyles/CatppuccinMocha/CatppuccinMocha.css',
  addons: [
		['themes/CatppuccinMocha/addons/_unrounding.scss', 'dist/CatppuccinMocha/Unrounding.css'],
		['themes/CatppuccinMocha/addons/_tui.scss', 'dist/CatppuccinMocha/TUI.css'],
		['themes/CatppuccinMocha/addons/_low-width.scss', 'dist/CatppuccinMocha/LowWidth.css'],
		['themes/CatppuccinMocha/addons/_read-all.scss', 'dist/CatppuccinMocha/ReadAll.css'],
	]
};
