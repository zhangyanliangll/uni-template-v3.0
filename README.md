# 提示

1. 使用时将 package.json 的 name 换成当前项目的名称
2. 在.gitignore 文件添加打包后的目录名
3. 下载安装包只能使用 yarn；（安装 yarn：npm install -g yarn；查看版本：yarn --version；）

## src 目录结构

- assets 资产目录
  - mixins 公用混入类目录
  - json 本地数据目录
  - ts 公用脚本目录
- components vue 组件目录
- pages 页面目录
- static 本地静态资源目录
- store 状态树目录
- App.vue 应用配置，用来配置 App 全局样式以及监听 应用生命周期
- main.js Vue 初始化入口文件
- manifest.json 配置应用名称、appid、logo、版本等打包信息，详见
- pages.json 配置页面路由、导航条、选项卡等页面类信息，详见
- uni.scss 配置 scss 的全局变量

# 项目插件版本：

1. vue@3.2.41、vuex@4.0.0;
2. vant@3.0.0；适配vue@3.0.0;
3. node 版本 v14.15.4;

## 文件的命名规范和样式的命名规范：

文件目录页面命名规范：文件:DynamiComponent.ts -> dynamic-component.ts; 目录:FormGroup -> form-group; 页面:Home.vue -> Home.vue;

### vite cli 配置

See [Configuration Reference](https://cn.vitejs.dev/).

### vs code 配置

```
{
  "editor.renderWhitespace": "all",
  "editor.cursorBlinking": "smooth",
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.formatOnPaste": true,
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx",
    "vue": "html",
    "vue-html": "html"
  },
  "eslint.options": {
    //"plugins": ["html"],
    "extensions": [
      ".js",
      ".vue"
    ]
  },
  "files.associations": {
    "*.vue": "vue",
    "*.ftl": "html",
    "*.js": "javascriptreact",
    "*.cjson": "jsonc",
    "*.wxml": "html",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "html.format.wrapAttributes": "force-expand-multiline",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "javascript.preferences.quoteStyle": "single",
  "search.showLineNumbers": true,
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/dist": true
  },
  "typescript.preferences.quoteStyle": "single",
  "typescript.check.npmIsInstalled": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "diffEditor.renderSideBySide": false,
  // "files.autoSave": "onFocusChange",
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "editor.fontLigatures": true,
  // -------------------/---------------上面公共配置   下面个性化配置--------------------------------------------------------------//
  "workbench.startupEditor": "newUntitledFile", // 是否显示 开始页面
  "eslint.alwaysShowStatus": true,
  "git.enableSmartCommit": true,
  "terminal.integrated.rendererType": "dom",
  "git.confirmSync": false,
  "gitlens.gitCommands.closeOnFocusOut": true,
  "editor.columnSelection": false,
  "eslint.format.enable": true,
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "files.exclude": {
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  },
  "editor.suggestSelection": "first",
  "explorer.confirmDelete": false,
  "gitlens.views.repositories.files.layout": "list",
  "git.autofetch": true,
  "gitlens.advanced.fileHistoryShowAllBranches": true,
  "javascript.updateImportsOnFileMove.enabled": "never",
  "vetur.format.defaultFormatter.html": "prettier",
  "editor.fontSize": 13.5,
  "editor.semanticTokenColorCustomizations": {},
  "explorer.confirmDragAndDrop": false,
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "semi": false, // 不加分号
      "singleQuote": true, // 用单引号
      "trailingComma": "none" // 禁止随时添加逗号
    }
  },
  "settingsSync.ignoredExtensions": [],
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "tabnine.experimentalAutoImports": true,
  "editor.quickSuggestions": {
    "strings": true
  },
  "terminal.integrated.tabs.enabled": true,
  "terminal.integrated.defaultProfile.osx": "zsh",
  "editor.linkedEditing": true,
  "workbench.iconTheme": "vscode-icons",
  "todo-tree.general.tags": [
    "BUG",
    "HACK",
    "FIXME",
    "TODO",
    "XXX",
    "[ ]",
    "[x]"
  ],
  "todo-tree.regex.regex": "(//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*($TAGS)",
  "http.proxyAuthorization": null,
  "window.zoomLevel": 1,
}

```
