export default {
  meta: {
    name: 'Catppuccin Mocha',
    author: 'jw0902',
    authorId: '780493281552760862',
    version: '0.1.0',
    description: '🎮 Soothing pastel theme for Discord',
    source: 'https://github.com/DiscordStyler/DiscordStyles',
  },
  base: {
    target: "base.scss",
    output: 'dist/CatppuccinMocha'
  },
  dist: {
    target: "dist.scss",
    output: "dist/CatppuccinMocha",
  },
  baseImport: 'https://discordstyler.github.io/DiscordStyles/CatppuccinMocha/CatppuccinMocha.css',
  addons: [
		['addons/_unrounding.scss', 'dist/CatppuccinMocha/Unrounding.css'],
		['addons/_tui.scss', 'dist/CatppuccinMocha/TUI.css'],
		['addons/_low-width.scss', 'dist/CatppuccinMocha/LowWidth.css'],
		['addons/_read-all.scss', 'dist/CatppuccinMocha/ReadAll.css'],
	]
};
