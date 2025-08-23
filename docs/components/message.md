---
title: Message | V-Element
discripton: Message 组件的文档
---

# Message 信息反馈
常用于主动操作后的反馈提示。

## 基本用法
默认情况下在顶部显示并在 3 秒后消失。

将属性 `duration` 设置为 0 可以阻止自动关闭。
<preview path="../demo/Message/Basic.vue" title="基础用法" discripton="Message 组件的基础用法"></preview>

## 不同状态
用于显示不同操作后的反馈信息。

通过 `type` 属性来定义不同状态，默认为 `info`。
<preview path="../demo/Message/Type.vue" title="不同状态" discripton="Message 组件的不同状态"></preview>

## 可关闭的消息提示
通过将 `showClose` 属性来设置为 `true` 可以添加关闭按钮。
<preview path="../demo/Message/Close.vue" title="可关闭的消息提示" discripton="通过将 `showClose` 属性来设置为 `true` 可以添加关闭按钮"></preview>

## Message API
### Message Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| message | 显示的内容 | `string` | - |
| type | 类型 | `string` | `info` |
| duration | 显示时间，单位为毫秒 | `number` | `3000` |
| showClose | 是否显示关闭按钮 | `boolean` | `false` |

