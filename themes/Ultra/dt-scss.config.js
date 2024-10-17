export default {
  meta: {
    name: 'Ultra',
    author: 'jw0902',
    version: '1.0.0',
    description: 'My cool theme',
    source: 'https://github.com/DiscordStyler/DiscordStyles',
  },
  base: {
    target: "base.scss",
    output: 'dist/Ultra'
  },
  dist: {
    target: "dist.scss",
    output: "dist/Ultra",
  },
  baseImport: 'https://discordstyler.github.io/DiscordStyles/Ultra/Ultra.css',
  addons: [
    ['addons/_banners.scss', 'dist/Ultra/Banners.css'],
    ['addons/_betterInvites.scss', 'dist/Ultra/BetterInvites.css'],
    ['addons/_touchup.scss', 'dist/Ultra/TouchUp.css'],
    ['addons/_userBadges.scss', 'dist/Ultra/UserBadges.css'],
  ]
};
