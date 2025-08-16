---
title: Button | V-Element
discripton: Button 组件的文档
---

# Button 按钮
常用的操作按钮。

## 基础用法
使用 `type`、 `plain`、 `round` 和 `circle` 属性来定义 Button 的样式。

<preview path="../demo/Button/Basic.vue" title="基础用法" discripton="Button 组件的基础用法"></preview>

## 禁用状态
你可以使用 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

<preview path="../demo/Button/Disabled.vue" title="禁用状态" discripton="禁用状态下按钮不可点击"></preview>

## 图标按钮
带图标的按钮可增强辨识度（有文字时）或节省空间（无文字时）。
你可以使用 `icon` 属性为按钮添加图标
。
<preview path="../demo/Button/IconButton.vue" title="图标按钮" discripton="带图标的按钮可增强辨识度（有文字时）或节省空间（无文字时）"></preview>


## API
### Button Attributes
| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 按钮类型 | `string` | `primary` / `success` / `warning` / `danger` / `info` / `default`| default |
| size | 按钮尺寸 | `string` | `small` / `normal` / `large` | normal |
| plain | 是否为朴素按钮 | `boolean` | - | false |
| round | 是否为圆角按钮 | `boolean` | - | false |
| circle | 是否为圆形按钮 | `boolean` | - | false |
| disabled | 是否禁用按钮 | `boolean` | - | false |
| icon | 图标类名 | `string` | - | - |
| loading | 是否显示加载状态 | `boolean` | - | false |
| native-type | 原生 type 属性 | `string` | `button` / `submit` / `reset` | button |