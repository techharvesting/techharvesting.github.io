// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/nightOwl');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TechHarvesting',
  tagline: 'TechHarvesting. Learn Full Stack Web Dev',
  url: 'https://techharvesting.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'techharvesting',
  projectName: 'techharvesting',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          path: 'tutorials',
          routeBasePath: 'tutorials',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,

        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TechHarvesting',
        logo: {
          alt: 'TechHarvesting Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorials',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://youtube.com/techharvestingwithnaseel',
            position: 'right',
            className: 'fa-brands fa-youtube h-red',
            'aria-label': 'Youtube',
          },
          {
            href: 'https://github.com/techharvesting',
            className: 'fa-brands fa-github h-white',
            'aria-label': 'GitHub',
            position: 'right',
          },
          {
            href: 'https://twitter.com/naseelniyas',
            className: 'fa-brands fa-twitter h-blue',
            'aria-label': 'Twitter',
            position: 'right',
          },
        ],
      },
      hideableSidebar: true,
      footer: {
        style: 'light',
        links: [
          {
            title: 'Tutorials',
            items: [
              {
                label: 'Tutorials',
                to: '/tutorials/intro',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/techharvesting',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/naseelniyas',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/techharvesting',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TechHarvesting.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

};

module.exports = config;
