/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Community Website',
  tagline: 'Some tagline to explain what the site is about',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'moja global', // Usually your GitHub org/user name.
  projectName: 'Community Website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Community Website',
      logo: {
        alt: 'moja global Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Projects',
        },
        {to: '/blog', label: 'Blogs', position: 'left'},
        {
          href: 'https://github.com/moja-global',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Projects',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Official Website',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blogs',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/moja-global',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} moja global.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
