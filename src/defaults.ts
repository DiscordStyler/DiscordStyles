import { getConfig, getDataFolder } from './utils.js';
import * as path from 'node:path';
import * as fs from 'node:fs';
import type { Config } from './config.js';

export const CREATE_DEFAULTS = async function(config: Config) {
	const devOutput = config?.dev?.output;
	// @ts-ignore
	const dataFolder = path.isAbsolute(devOutput) && fs.existsSync(devOutput) ? devOutput : getDataFolder();

	return {
		dev: {
			target: 'src/dev.scss',
			output: dataFolder
		},
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