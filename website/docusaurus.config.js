/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: `Moja Global Community`,
  tagline: `Learn about moja global's projects and join our ever-growing community`,
  url: 'https://community.moja.global',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'moja global', // Usually your GitHub org/user name.
  projectName: 'Community Website', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    algolia: {
      // If Algolia did not provide you any appId, use 'BH4D9OD16A'
      appId: 'BH4D9OD16A',

      // Public API key: it is safe to commit it
      apiKey: '2227dd7224b78071d191aff9cbf1a6c5',

      indexName: 'moja',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: 'BH4D9OD16A',

      // Optional: Algolia search parameters
      searchParameters: { 'facetFilters': ["type:content"] },
      debug: false

      //... other Algolia params
    },
    announcementBar: {
      id: 'announcementBar',
      backgroundColor: '#74e8a3',
      isCloseable: true,
      content:
        'If you would like to contribute, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/moja-global/community-website">GitHub</a> ⭐ and take a look at the open issues!',
    },
    colorMode: {
      defaultMode: 'dark',
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIcon: '💡',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'Community',
      hideOnScroll: true,
      logo: {
        alt: 'moja global Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo-light.png',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Projects',
        },
        { to: '/blog', label: 'Blogs', position: 'left' },
        { to: '/initiatives', label: 'Initiatives', position: 'left' },
        {
          to: '/community/support',
          label: 'Community',
          position: 'left',
          activeBaseRegex: '/community/',
        },
        {
          to: '/case-studies/introduction',
          label: 'Case Studies',
          position: 'left',
          activeBaseRegex: '/case-studies/',
        },
        {
          href: 'https://github.com/moja-global',
          label: 'GitHub',
          position: 'right',
        },
        { to: '/roadmap', label: 'Roadmap', position: 'right' },
        {
          to: '/tutorial/tutorial-introduction',
          label: 'Tutorial',
          position: 'left',
          activeBaseRegex: '/tutorial/',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'moja global light logo',
        src: '/img/logo-light.png',
        href: 'https://moja.global',
      },
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'FLINT',
              href: 'https://moja.global/flint/',
            },
            {
              label: 'FLINT UI',
              href: 'https://docs.moja.global/projects/flint-ui/en/latest/',
            },
            {
              label: 'FLINT Reporting Tool',
              href: 'https://docs.moja.global/projects/flint-reporting/en/latest/',
            },
            {
              label: 'Taswira',
              href: 'https://github.com/moja-global/GCBM.Visualisation_Tool',
            },
            {
              label: 'FLINT JSON Editor',
              href: 'https://github.com/moja-global/FLINT.JSON_Interface',
            },
            {
              label: 'FLINT Cloud',
              href: 'https://docs.moja.global/projects/flintcloud/en/latest',
            },
            {
              label: 'FAQs',
              href: 'https://docs.moja.global/en/latest/faq.html',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Projects',
              href: '/docs',
            },
            {
              label: 'Blogs',
              href: '/blog',
            },
            {
              label: 'News',
              href: 'https://moja.global/news/',
            },
            {
              label: 'Mentorship',
              href: '/community/mentorship',
            },
            {
              label: 'Slack',
              href: 'https://mojaglobal.slack.com/',
            },
            {
              label: 'Initiatives',
              href: '/initiatives',
            },
            {
              label: 'Roadmap',
              href: '/roadmap',
            },
            {
              label: 'Case Studies',
              href: '/case-studies/introduction',
            },
          ],
        },
        {
          title: 'Getting Started',
          items: [
            {
              label: 'About moja global',
              href: '/docs/about-moja-global',
            },
            {
              label: 'Governance model',
              href: '/community/governance',
            },
            {
              label: 'Newsletter',
              href: 'https://global.us13.list-manage.com/subscribe?u=d8a187fa0dfae0bafe4bc69cc&id=cbfdc2d476',
            },
            {
              label: 'Contributing guidelines',
              href: '/community/contributing',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter ',
              href: 'https://twitter.com/mojaglobal',
            },
            {
              label: 'Youtube ',
              href: 'https://www.youtube.com/channel/UCfQUrrNP1Xf-Fv4c8uHYXhQ',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/moja-global',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/moja-global/',
            },
          ],
        },
        {
          title: 'Sponsors',
          items: [
            {
              html: `
                <a href="https://www.linuxfoundation.org/" target="_blank" rel="noreferrer noopener" aria-label="Powered by">
                  <img width="150" height="50" src="/img/linux-foundation.svg" alt="Backed by the Linux Foundation" />
                </a>
              `,
            },
            {
              html: `
                <a href="https://vercel.com/?utm_source=[moja-global]&utm_campaign=oss" target="_blank" rel="noreferrer noopener" aria-label="Powered by">
                  <img width="225" height="75" src="/img/powered-by-vercel.svg" alt="Powered by Vercel" />
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} moja global.`,
    },
    image: 'https://community.moja.global/img/logo.png',
    metadatas: [
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://community.moja.global/img/logo.png',
      },
      { name: 'twitter:title', content: 'Moja Global Community' },
      {
        name: 'twitter:description',
        content: "Learn about moja global's projects and join our ever-growing community",
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        googleAnalytics: {
          trackingID: 'UA-195907568-1',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'case-studies',
        path: 'case-studies',
        routeBasePath: 'case-studies',
        sidebarPath: require.resolve('./sidebarsCaseStudies.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial-introduction',
        path: 'tutorial',
        routeBasePath: 'tutorial',
        sidebarPath: require.resolve('./sidebarsTutorial.js'),
      },
    ],
  ],
};
