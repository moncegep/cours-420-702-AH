// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import yaml from '@modyfi/vite-plugin-yaml';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mermaid(),
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
			lastUpdated: true,
			sidebar: [
				{
					label: 'Notes de cours',
					items: [
						{ label: 'Introduction', slug: 'cours/01-introduction' },
						{ label: 'Fichiers', slug: 'cours/03-fichiers' },
						{ label: 'Virtualisation', slug: 'cours/04-virtualisation' },
						{ label: 'Gestionnaire de paquets', slug: 'cours/05-paquets' },
						{ label: 'Utilisateurs et permissions', slug: 'cours/06-utilisateurs-permissions' },
						{ label: "Variables d'environnement", slug: 'cours/07-variables-env' },
						{ label: "Programmes & processus", slug: 'cours/08-processus' },
						{ label: "Recherche, filtres et redirections", slug: 'cours/09-filtres' },
					]
				},
				{
					label: 'Activités',
					items: [
						{ label: 'Linux et ligne de commande', slug: 'activites/01-terminal' },
						{ label: 'Fichiers et logs', slug: 'activites/02-fichiers-et-logs' },
						{ label: 'Modélisation ascenseur', slug: 'activites/03-modelisation-ascenseur' },
						{ label: 'Installation Linux', slug: 'activites/04-installation-linux' },
						{ label: 'Permissions à la FAAQ', slug: 'activites/05-faaq' },
						{ label: 'Automatiser la FAAQ avec un script bash', slug: 'activites/06-faaq-bash' },
						{ label: 'Recherche et variables env', slug: 'activites/07-recherche-bash' }
					],
				},
				{
					label: 'Projet',
					slug: 'projet'
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		react(),
	],
	vite: {
		plugins: [yaml()],
	}
});
