# 开发过程中出现的问题

## vue-router 中使用ts
（1）导入vue组件时找不到模块或其相应的类型声明
在 TypeScript 中，每个模块都应该有一个对应的声明文件（.d.ts 文件），用于描述模块的类型信息。
对于 .vue 文件，你需要使用 Vue 的类型声明来告诉 TypeScript 如何理解 .vue 文件
创建一个shims-vue.d.ts，在src下即可

```typescript
//它是告诉ts，后缀为vue的模块的导出的类型是 DefineComponent<{}, {}, any>
declare module "*.vue" {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```
