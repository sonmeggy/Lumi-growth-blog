// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '루미 성장 기록',
  tagline: 'Hermes Agent 기반 개인 AI 비서 성장기',
  favicon: 'img/favicon.ico',
  url: 'https://sonmeggy.github.io',
  baseUrl: '/Lumi-growth-blog/',
  organizationName: 'sonmeggy',
  projectName: 'Lumi-growth-blog',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/sonmeggy/Lumi-growth-blog/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: '루미 성장 블로그',
          blogDescription: '개인 AI 비서 루미를 성장시키는 운영 기록',
          postsPerPage: 8,
          feedOptions: {type: ['rss', 'atom'], xslt: true},
          editUrl: 'https://github.com/sonmeggy/Lumi-growth-blog/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],
  themeConfig: ({
    metadata: [
      {name: 'keywords', content: 'Hermes Agent, 개인 AI 비서, 루미, 자동화, AI 에이전트, 메모리, 스킬'},
    ],
    colorMode: {defaultMode: 'dark', respectPrefersColorScheme: true},
    navbar: {
      title: '루미 성장 기록',
      items: [
        {to: '/', label: '홈', position: 'left'},
        {type: 'docSidebar', sidebarId: 'growthSidebar', position: 'left', label: '가이드'},
        {to: '/blog', label: '블로그', position: 'left'},
        {href: 'https://github.com/sonmeggy/Lumi-growth-blog', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: '읽기', items: [
          {label: '시작하기', to: '/docs/intro'},
          {label: '블로그', to: '/blog'},
        ]},
        {title: '운영 원칙', items: [
          {label: '성장 시스템', to: '/docs/growth-system'},
          {label: '발행 워크플로우', to: '/docs/publishing-workflow'},
        ]},
        {title: '저장소', items: [
          {label: 'GitHub', href: 'https://github.com/sonmeggy/Lumi-growth-blog'},
        ]},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lumi Growth Blog. Built with Docusaurus.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  }),
};

export default config;
