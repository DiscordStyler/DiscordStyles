import type { Config } from './config.js';

export const CREATE_DEFAULTS = async function(config: Config) {
	return {
		dist: {
			target: 'src/dist.scss',
			output: 'dist'
		},
		base: {
			target: 'src/base.scss',
			output: 'dist'
		},
		baseImport: `https://${config?.meta.author.toLowerCase()}.github.io/${config?.meta.name}/${config?.meta.name}.css`
	};
}