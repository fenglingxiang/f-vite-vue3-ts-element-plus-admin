// .cz-config.js
module.exports = {
  // 1. 定义提交类型 (type)
  // 这是最核心的配置，定义了开发者可以选择的提交种类
  types: [
    { value: 'feat', name: 'feat:      ✨ 新增一个功能' },
    { value: 'fix', name: 'fix:       🐛 修复一个 Bug' },
    { value: 'docs', name: 'docs:      📝 仅文档更新' },
    { value: 'style', name: 'style:     💄 代码格式（不影响功能，如空格、分号）' },
    { value: 'refactor', name: 'refactor:  🔨 代码重构（不是新增功能，也不是修 Bug）' },
    { value: 'perf', name: 'perf:      ⚡️ 性能优化' },
    { value: 'test', name: 'test:      ✅ 添加或修正测试' },
    { value: 'build', name: 'build:     📦 构建流程、依赖管理（如修改 webpack、npm 包）' },
    { value: 'ci', name: 'ci:        👷 修改 CI 配置、脚本' },
    { value: 'chore', name: 'chore:     🔧 对构建过程或辅助工具的更改' },
    { value: 'revert', name: 'revert:    ⏪ 回滚某次提交' },
  ],

  // 2. 自定义提示信息 (messages)
  // 开发者使用 'git cz' 时，终端里显示的问题
  messages: {
    type: '请选择你本次提交的类型：',
    // scope:     '\n请选择此次更改影响的范围 (可选，按回车跳过)：',
    customScope: '请输入此次更改影响的自定义范围 (可选)：',
    subject: '请简要描述本次提交的更改 (必填)：\n',
    body: '请输入更详细的变更描述 (可选，使用 "|" 进行换行)：\n',
    // breaking:  '请列出任何非兼容性的重大变更 (可选)：\n',
    footer: '请列出此次关闭的 issue (可选)。例如: #31, #34：\n',
    confirmCommit: '确认使用以上信息提交吗？',
  },

  // 3. 设置影响范围 (scope) 的选项
  // 如果项目模块清晰，预设 scope 可以规范提交粒度
  // scopes 和 allowCustomScopes 二选一即可，或者两者都配
  // 方式一：预设一个 scope 列表
  // scopes: [
  //   { name: 'components' },
  //   { name: 'utils' },
  //   { name: 'hooks' }
  // ],

  // 方式二：允许用户手动输入任何 scope
  allowCustomScopes: true,

  // 4. 限制标题 (subject) 的长度
  subjectLimit: 100,

  // 5. 其他常用高级选项

  // 为特定的 type 单独设置可选的 scope
  // scopeOverrides: {
  //   fix: [
  //     { name: 'merge' },
  //     { name: 'style' }
  //   ]
  // },

  // 6. 跳过某些提问环节，简化流程
  skipQuestions: ['body', 'footer'],

  // 7. 仅当 type 为 'feat' 或 'fix' 时才询问 breaking change
  // allowBreakingChanges: ['feat', 'fix'],
};
