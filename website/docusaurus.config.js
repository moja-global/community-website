/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Moja Global Community',
  tagline: `Learn about moja global's projects and join our ever-growing community`,
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
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
        srcDark: 'img/logo-light.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'test',
          position: 'left',
          label: 'Projects',
        },
        { to: '/blog', label: 'Blogs', position: 'left' },
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
        href: 'https://moja.global',
      },
      style: 'dark',
      links: [
        {
          title: 'Projects',
          items: [
            {
              label: 'Projects',
              to: '/docs/test',
            },
            {
              label: 'FLINT',
              href: 'https://moja.global/flint/',
            },
            {
              label: 'FLINT UI',
              href: 'https://docs.moja.global/projects/flint-ui/en/latest/index.html',
            },
            {
              label: 'FLINT Reporting Tool',
              href: 'https://github.com/moja-global/FLINT.Reporting',
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
              href: 'https://docs.moja.global/projects/flintcloud/en/latest/index.html#',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Blogs',
              href: 'https://community.moja.global/blog',
            },
            {
              label: 'News',
              href: 'https://moja.global/news/',
            },
            {
              label: 'Programs',
              href: 'https://docs.moja.global/en/latest/contact.html#outreach-and-student-programs',
            },
            {
              label: 'FAQs',
              href: 'https://docs.moja.global/en/latest/faq.html',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/mojaglobal/shared_invite/zt-o6ta1ug0-rVLjAo460~d7JbZ~HpFFtw',
            },
            
            
          ],
        },
        {
          title: 'Getting Started',
          items: [
            {
              label: 'What is FLINT?',
              href: 'https://moja.global/flint/',
            },
            {
              label: 'About moja global',
              href: 'https://github.com/moja-global',
            },
            {
              label: 'Newsletter',
              href: ' https://global.us13.list-manage.com/subscribe?u=d8a187fa0dfae0bafe4bc69cc&id=cbfdc2d476',
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
                <a href="https://vercel.com/?utm_source=[moja-global]&utm_campaign=oss" target="_blank" rel="noreferrer noopener" aria-label="Powered by">
                  <img src="/img/powered-by-vercel.svg" alt="Powered by Vercel" />
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} moja global.`,
    },
    image: "https://community.moja.global/img/logo.png",
    metadatas: [
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://community.moja.global/img/logo.png",
      },
      { name: "twitter:title", content: "Moja Global Community" },
      {
        name: "twitter:description",
        content: "Learn about moja global's projects and join our ever-growing community",
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
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
};
