# 韩明浩 · 个人主页

以就业展示为主的静态个人站点，部署于 https://minghaohan.github.io/ 。

## 内容与维护

- `index.html`：个人主页结构、基本信息与搜索引擎元数据。
- `portfolio/profile.js`：简介、项目、工作教育经历与技能数据。
- `portfolio/app.js`：栏目路由、项目筛选、搜索与展开详情。
- `portfolio/style.css`：桌面与手机排版。
- `portfolio/avatar.png`：本人的公开 GitHub 头像。
- `blog.html`：原博客首页完整副本。旧文章、归档及静态资源沿用原路径。

个人经历与项目指标由本人提供的简历整理。未上传含私人电话和微信的原始 PDF。主页未使用第三方分析或字体服务，无构建与运行时依赖。

## 本地预览

```sh
python3 -m http.server 18765 --bind 127.0.0.1
```

打开 http://127.0.0.1:18765/ 。GitHub Pages 使用原有 `master` 分支根目录发布。

## 已验证

JavaScript 语法、四个栏目导航、项目类别筛选、关键字搜索与空结果、项目深链接与详情展开、320px 与 390px 手机宽度无横向溢出。旧博客首页复制保留，原文章未修改。

布局参考 https://wbhu.github.io/ ，个人主页代码与示意图独立实现。
