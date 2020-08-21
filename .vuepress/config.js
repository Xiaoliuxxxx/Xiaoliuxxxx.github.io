module.exports = {
  title: "Xiaoliuxxxx",
  description: "Welcome to Xiaoliuxxxx's personal blog~ ",
  dest: "public",
  head: [
    ["link", { rel: "icon", href: "/icon.png" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
      {
        text: "关于我",
        icon: "reco-message",
        items: [{ text: "关于我", link: "/docs/theme-reco/aboutme" }],
      },
      {
        text: "联系",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/Xiaoliuxxxx",
            icon: "reco-github",
          },
        ],
      },
    ],
    // 侧边栏
    sidebar: "auto",
    slidebarDepth: 2,
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    logo: "/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "Xiaoliuxxxx",
    // 作者头像
    authorAvatar: "/avatar.png",
    // 备案号
    record: "xxxx",
    // 项目开始时间
    startYear: "2020",
  },
  markdown: {
    lineNumbers: true,
  },
};
