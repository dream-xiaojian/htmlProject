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

## 布局问题

原则：
（1）底部的菜单决定各大模块
（2）每个模块产生的新的页面，通过顶部的返回按钮，回去上一次的页面，最终回到的是模块页面，主要是页面转场动画

核心步骤：
（1）watch监听路由对象变化
（2）修改transition这个vue组件


```typescript
export default {
  activated() {
    console.log('Component is activated!');
  },
  deactivated() {
    console.log('Component is deactivated!');
  }
}
```

## 页面回退时回到之前浏览的位置

