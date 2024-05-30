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


## 个人页面

第一个:这里就涉及到一个权限问题: 
对于同一个页面: 根据权限来进行组件的控制
(1)自己访问自己

(2)访问非自己的主页

## 对于图片类数据

在IndexDB中建立两个表完成数据的存储，即可以通过索引来提高检索效率
又可以在本数据架构下减少加入到内存中的数据

## 图片上传同时预览裁剪

（1）input输入文件，变成base64
（2）通过image src base64回显图片
（3）同时通过canvans支持图片的裁剪

## 某些数据是否加载一次的问题
比如首页只有第一次访问时加载数据，路由切换时不进行加载数据
解决：全局状态管理，isIndexDateLoaded

## 数据库结构调整
将图片视频类真正的dataurl存储到数据类数据库中，
其他数据库之存放它的引用，可以极大的减小在当前数据库情况下的
修改成本

## 下拉刷新

## 上拉刷新




