/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {

  title: 'Moja Global Community',
  tagline: `Learn about moja global's projects and join our ever-growing community`,
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'moja global', // Usually your GitHub org/user name.
  projectName: 'Community Website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Community',
      logo: {
        alt: 'moja global Logo',
        src: 'img/logo.png',
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
      logo: {
        alt: 'moja global light logo',
        src: '/img/logo-light.png',
        href: 'https://moja.global'
      },
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
              href: 'https://join.slack.com/t/mojaglobal/shared_invite/zt-o6ta1ug0-rVLjAo460~d7JbZ~HpFFtw',
            },
            {
              label: 'Official Website',
              href: 'https://moja.global',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/mojaglobal',
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
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/moja-global/'
            },
           
          ],
        },
        {
          title: 'Sponsors',
          items: [
            {
              html: `
                <a href="https://vercel.com/?utm_source=[moja-global]&utm_campaign=oss" target="_blank" rel="noreferrer noopener" aria-label="Powered by">
                  <img src="/img/powered-by-vercel.svg" alt="Powered by Vercel" />
                </a>
              `,
            },
          ]
        }
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
