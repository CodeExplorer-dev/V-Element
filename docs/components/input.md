---
title: Input | V-Element
discripton: Input 组件的文档
---

# Input 输入框
通过鼠标或键盘输入字符

## 基础用法
<preview path="../demo/Input/Basic.vue" title="基本用法" discripton="基础的输入框用法。"></preview>

## 禁用状态
通过 `disabled` 属性可以禁用输入框，它接受一个 `Boolean`，默认值为 `false`。
<preview path="../demo/Input/Disabled.vue" title="禁用状态" discripton="通过 `disabled` 属性可以禁用输入框，它接受一个 `Boolean`，默认值为 `false`。"></preview>

## 可清空
使用 `clearable` 属性即可得到一个可清空的输入框，默认值为 `false`
<preview path="../demo/Input/Clearable.vue" title="可清空" discripton="使用 `clearable` 属性即可得到一个可清空的输入框。"></preview>

## 密码框
使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框，默认值为 `false`。
<preview path="../demo/Input/Password.vue" title="密码框" discripton="使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框。"></preview>

## 尺寸
可通过 `size` 属性指定输入框的尺寸，除了默认的尺寸外，提供了 `largr`、`small` 和 `normal` 三种尺寸。

默认为 `normal`。
<preview path="../demo/Input/Size.vue" title="尺寸" discripton="可通过 `size` 属性指定输入框的尺寸。"></preview>

## 文本域
通过 `type` 属性可以定义不同的输入框类型，除了默认的 `text` 类型外，还提供了 `textarea` 类型。
<preview path="../demo/Input/Textarea.vue" title="文本域" discripton="通过 `type` 属性可以定义不同的输入框类型，除了默认的 `text` 类型外，还提供了 `textarea` 类型。"></preview>

## 复合型输入框
可以在输入框中前置或后置一个元素，通常是标签或按钮。
<preview path="../demo/Input/Complex.vue" title="复合型输入框" discripton="可以在输入框中前置或后置一个元素，通常是标签或按钮。。"></preview>

## Input API
### Input Attributes
| 属性名 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| v-model | 绑定值 | `String` | - |
| type | 输入框类型 | `String` | `text` |
| size | 输入框尺寸 | `String` | `normal` |
| clearable | 是否可清空 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| placeholder | 输入框占位文本 | `String` | - |
| show-password | 是否显示切换密码图标 | `Boolean` | `false` |
| readonly | 是否只读 | `Boolean` | `false` |
| autocomplete | 原生属性，自动补全 | `String` | `off` |
| autofocus | 原生属性，自动获取焦点 | `Boolean` | `false` |
| form | 原生属性，指定一个表单 | `String` | - |

### Input Events
| 事件名 | 说明 | 类型 |
| :--- | :--- | :--- |
| input | 输入框内容改变时触发 | (value: string) => void |
| change | 输入框内容改变时触发，并且失去焦点时触发 | (value: string) => void |
| focus | 输入框聚焦时触发 | (event: Event) => void |
| blur | 输入框失去焦点时触发 | (event: Event) => void |
| clear | 点击清空按钮时触发 | () => void |

### Input Slots
| 插槽名 | 说明 | 
| --- | --- |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |