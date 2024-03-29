# Git 提交流程和方法

# 提交流程 (一)

1.git checkout dev | 在 dev 上开发
2.git stash | 暂存开发的代码在工作栈中
3.git pull --rebase | 拉取最新代码
4.git stash pop | 放开暂存代码，解决冲突
5.git add . | 提交到本地暂存区
6.git commit -m"" | 提交代码，添加日志说明
7.git push | 推送远程

# 将 dev 合并到 master 并推向远程

1.git checkout dev | 检出到 dev 分支
2.git pull --rebase | 拉取 dev 最新代码到当前文件夹
3.git checkout master | 检出到 master 分支
4.git merge dev | 将 dev 分支合并到 master
5.git push - u origin master | 将本地的 master 分支推送到 origin 主机

# Git 的常用方法

| 指令 | 描述 |
| git remote rm origin | 删除远程地址 |
| git remote add origin URL | 添加远程地址 |
| git config user.name | 查看用户名 |
| git config user.email | 查看邮箱地址 |
| git config user.name "xxx" | 修改当前用户名 --global 为全局|
| git config user.email "xxx" | 修改当前邮箱地址 |
| git config user.password "xxx"| 修改当前当前密码 |
| git stash | 将当前未提交的工作存入 Git 工作栈中, 时机成熟时候应用回来 |
| git stash pop | 放开暂存 |
| git cherry-pick $id | 拉取单条提交记录的代码 |
| git remote - v | 查看远程仓库 |
| git remote add origin--url | 推到远程上添加源 |
| git branch | 查看本地分支 |
| git branch - r | 查看远程分支 |
| git branch[name] | 创建本地分支 |
| git branch - d[name] | 删除分支 |
| git checkout[name] | 切换分支 |
| git checkout - b name | 创建分支并立即切换新分支 |
| git help | 显示 command 的 help |
| git show | 显示某次提交的内容 git show \$id |
| git pull[remoteName][locabranchname] | 拉取远程仓库 remoteName 远程仓库一般是 origin |
| git push[remoteName][locabranchname] | 推送远程仓库 |
| git reset --hard commit_id | 恢复最近一次提交过的状态, 还没有 push |
| git status | 查询 repo 的状态 |
| git log | 查看提交记录, 按 q 退出 |
| git revert | 反转撤销提交 |
| git fetch | 取某一个远程 repo 列子: git fetch - p 获取删减后的远程分支 |
| git add. | 将所有修改过的文件提交到暂存区 |
| git pull origin master | 拉取 master 代码 |
| git rebase --continue | 解决完冲突，合并冲突，继续提交；（正在变基...） |
| git rebase --abort | 会放弃合并，回到 rebase 操作之前的状态，之前的提交的不会丢弃

| git reset --soft HEAD^ | 仅仅撤销 commit ,保留 add

| git reset --hard HEAD^ | 撤销 commit 并且也撤销 add

| git stash drop stash@{1} | 删除 stash

# Node/Npm/Yarn 的常用方法

| `sudo n 14.0.0` | 安装指定版本 node

| `node 版本 切换工具 volta` ｜ Mac 安装： `curl https://get.volta.sh | bash`

| volta install node@14 ｜ 默认使用的版本

| volta pin node@16 | 当前项目需要使用 node 的版本

| volta pin pnpm | node 版本需要 14 及以上 安装

| volta pin yarn@1 | 当前项目需要使用 yarn 的版本

| `volta 卸载 node/yarn/npm`

| cd ~/.volta/tools/image | 进入 tools 在 cd 进入 node

| cd node rm -rf 12.0.0 | 卸载 node 12.0.0 版本

｜ PNPM
｜ pnpm config get registry ｜ 查看镜像源
｜ pnpm config set registry https://registry.npmmirror.com ｜ 设置淘宝镜像
｜ pnpm config set registry https://registry.npm.taobao.org ｜ 设置淘宝镜像
