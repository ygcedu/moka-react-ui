// 给所有 .svg 文件加默认导出，防止在 ts 中使用 import 语法引入 svg 文件（有 from 的情况下）报错
declare module '*.svg' {
  const content: any;
  export default content;
}
