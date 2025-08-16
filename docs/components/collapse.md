---
title: Collapse | V-Element
discripton: Collapse 组件的文档
---

# 折叠面板
通过折叠面板收纳内容区域。

## 基础用法
可同时展开多个面板，面板之间不影响。
<preview path="../demo/Collapse/Basic.vue" title="基本用法" discripton="基础的折叠面板用法。"></preview>

## 手风琴模式
一次只能展开一个面板，面板有影响。

将 `accordion` 属性设置为 `true` 即可开启手风琴模式，默认为 `false`。
<preview path="../demo/Collapse/Accordion.vue" title="手风琴模式" discripton="手风琴模式的折叠面板用法。"></preview>

## 自定义图标位置
通过 `icon-position` 属性可以设置图标的位置，默认为 `right`。

<preview path="../demo/Collapse/IconPosition.vue" title="图标位置" discripton="图标位置的折叠面板用法。"></preview>

## 自定义标题
除了默认插槽，还可以自定义标题。

<preview path="../demo/Collapse/Custom.vue" title="自定义内容" discripton="自定义内容的折叠面板用法。"></preview>

## Collapse API
### Collapse Attributes
| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| v-model | 当前激活的面板的 `name` 组成的数组 | `Array[]` | - | - |
| accordion | 是否开启手风琴模式 | `Boolean` | `true` /  `false` | `false` |
| icon-position | 图标位置 | `string` | `left` / `right` | `right` |

## CollapseItem API

### CollapseItem Attributes
| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 唯一标志符 | `string` / `number` | - | - |
| title | 面板标题 | `string` | - | '' |
| disabled | 是否禁用 | `Boolean` | `true` / `false` | `false` |

### CollapseItem Slots
| 插槽名 | 说明 | 类型 | 
| --- | --- | --- |
| default | 面板内容 | - |
| title | 自定义标题 | - |

