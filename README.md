# Low FODMAP Diet Guide Website

一个面向海外用户的专业低FODMAP饮食指南网站，采用苹果风格设计，专注于为IBS和消化问题用户提供全面的饮食信息。

## 🌟 项目特色

- **现代化设计**: 采用苹果风格UI设计，简洁优雅
- **响应式布局**: 完美适配桌面端、平板和移动设备
- **SEO优化**: 针对Google搜索优化，包含丰富的关键词
- **AdSense就绪**: 预留广告位，支持Google AdSense变现
- **交互功能**: 食物搜索、食谱筛选、FAQ展开等
- **专业内容**: 基于科学研究的FODMAP饮食信息

## 📁 项目结构

```
game/
├── index.html          # 主页面
├── blog.html           # 博客页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
└── README.md           # 项目说明
```

## 🚀 快速开始

### 本地开发

1. **克隆或下载项目**
   ```bash
   # 如果使用git
   git clone [repository-url]
   cd game
   ```

2. **启动本地服务器**
   ```bash
   # 使用Python (推荐)
   python -m http.server 8000
   
   # 或使用Node.js
   npx http-server
   
   # 或使用PHP
   php -S localhost:8000
   ```

3. **访问网站**
   打开浏览器访问 `http://localhost:8000`

### 部署到Cloudflare Pages

1. **准备文件**
   - 确保所有文件都在项目根目录
   - 检查文件路径是否正确

2. **上传到Cloudflare Pages**
   - 登录 [Cloudflare Pages](https://pages.cloudflare.com/)
   - 点击 "Create a project"
   - 选择 "Upload assets"
   - 上传整个项目文件夹
   - 设置构建命令（可选）
   - 点击 "Deploy site"

3. **自定义域名**（可选）
   - 在Cloudflare Pages设置中添加自定义域名
   - 配置DNS记录

## 🎨 页面功能

### 首页 (index.html)
- **Hero区域**: 吸引人的标题和CTA按钮
- **功能介绍**: 四大核心功能展示
- **What is Low FODMAP**: 详细的饮食科普
- **食物清单**: 可搜索的高/低FODMAP食物数据库
- **食谱库**: 分类展示的食谱卡片
- **指南技巧**: 实用的饮食指南
- **FAQ**: 常见问题解答

### 博客页面 (blog.html)
- **特色文章**: 突出显示重要内容
- **文章网格**: 分类展示博客文章
- **侧边栏**: 搜索、分类、热门文章、邮件订阅
- **响应式设计**: 移动端友好的布局

## 🔧 技术特性

### HTML5语义化
- 使用语义化标签提高SEO
- 结构化数据标记
- 无障碍访问支持

### CSS3现代特性
- Flexbox和Grid布局
- CSS变量和自定义属性
- 平滑过渡和动画效果
- 响应式媒体查询

### JavaScript功能
- 移动端导航菜单
- 食物搜索和筛选
- 食谱分类筛选
- FAQ手风琴效果
- 平滑滚动导航
- 懒加载优化

## 📱 响应式设计

- **桌面端**: 1200px+ 完整功能展示
- **平板端**: 768px-1199px 适配布局
- **移动端**: <768px 优化触摸体验

## 🎯 SEO优化

### 关键词策略
- **主关键词**: Low FODMAP Diet, IBS Diet, FODMAP Recipes
- **长尾词**: is banana low fodmap, fodmap food list pdf
- **本地化**: 针对英语用户优化

### 技术SEO
- 语义化HTML结构
- 优化的meta标签
- 结构化数据
- 快速加载速度
- 移动端友好

## 💰 变现策略

### Google AdSense
- 食谱页面中段广告位
- 食物清单下方推荐广告
- 博客页面信息流广告
- 下载页面高转化广告位

### 未来扩展
- 电商联盟（低FODMAP食品）
- 营养师咨询服务
- 付费会员功能
- 电子书销售

## 🛠️ 自定义配置

### 修改颜色主题
在 `styles.css` 中修改CSS变量：
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #1d1d1f;
  --bg-color: #ffffff;
}
```

### 添加新内容
1. **食物数据**: 在 `script.js` 的 `foodDatabase` 数组中添加
2. **食谱**: 在HTML中添加新的 `.recipe-card` 元素
3. **博客文章**: 在 `blog.html` 中添加新的 `.blog-article` 元素

### 集成Google AdSense
1. 注册Google AdSense账户
2. 获取广告代码
3. 替换页面中的 `.ad-container` 内容
4. 在 `script.js` 中取消注释相关代码

## 📊 性能优化

- 图片懒加载
- CSS和JS压缩
- 浏览器缓存优化
- CDN加速（Cloudflare）
- 代码分割

## 🔒 安全考虑

- HTTPS强制重定向
- 内容安全策略(CSP)
- XSS防护
- 表单验证

## 📈 分析工具

### Google Analytics
在 `script.js` 中取消注释相关代码：
```javascript
// gtag('event', action, {
//     event_category: category,
//     event_label: label
// });
```

### 其他工具
- Google Search Console
- Google PageSpeed Insights
- Cloudflare Analytics

## 🚀 部署检查清单

- [ ] 所有文件上传完成
- [ ] 图片路径正确
- [ ] CSS和JS文件链接正确
- [ ] 移动端测试通过
- [ ] 页面加载速度优化
- [ ] SEO元标签完整
- [ ] 社交媒体分享标签
- [ ] 404错误页面
- [ ] 网站地图(sitemap.xml)
- [ ] robots.txt文件

## 📞 技术支持

如需技术支持或有问题，请：
1. 检查浏览器控制台错误
2. 验证文件路径
3. 确认服务器配置
4. 查看Cloudflare Pages日志

## 📄 许可证

本项目仅供学习和商业使用。请确保遵守相关法律法规和平台政策。

---

**注意**: 这是一个静态网站，所有内容都是示例数据。在实际使用前，请替换为真实的内容和图片，并确保所有医疗信息都经过专业验证。
