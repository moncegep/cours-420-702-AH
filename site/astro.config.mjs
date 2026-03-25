// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Système d'exploitation",
			defaultLocale: "root",
			locales: {
				root: {
					label: 'Français',
					lang: 'fr',
				}
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Notes de cours',
					items: [
						{ label: 'Introduction', slug: 'cours/01-introduction' },
						{ label: 'Fichiers', slug: 'cours/03-fichiers' }
					]
				},
				{
					label: 'Activités',
					items: [
						{ label: 'Linux et ligne de commande', slug: 'activites/01-terminal' },
						{ label: 'Fichiers et logs', slug: 'activites/02-fichiers-et-logs' },
						{ label: 'Modélisation ascenseur', slug: 'activites/03-modelisation-ascenseur' }
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		react(),
	],
});
