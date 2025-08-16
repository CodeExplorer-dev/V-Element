---
title: Alert | V-Element
discripton: Alert 组件的文档
---

# Alert 提示
用于在页面中展示提示信息。

## 基础用法
Alert 组件提供5种类型（`primary`、`success`、`warning`、`danger`、`info`），由 type 属性指定，默认值为 info。

<preview path="../demo/Alert/Basic.vue" title="基础用法" discripton="Alert 组件的基础用法"></preview>

## 主题
Alert 组件提供了两种主题：`light` 和 `dark`。

通过 `effect` 属性设置主题，默认为 `light`。

<preview path="../demo/Alert/Theme.vue" title="主题" discripton="Alert 组件的主题"></preview>

## 关闭按钮
Alert 组件提供了关闭按钮。

通过 `closable` 属性设置关闭按钮，默认为 `true`。

<preview path="../demo/Alert/Close.vue" title="关闭按钮" discripton="Alert 组件的关闭按钮"></preview>

## 自定义内容
Alert 组件支持自定义内容。

插槽名为 `title`。

<preview path="../demo/Alert/Custom.vue" title="自定义内容" discripton="Alert 组件的自定义内容"></preview>



## API
### Alert 属性
| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 提示样式 | string | `primary` / `success` / `warning` / `danger` / `info` | `info` |
| effect | 提示主题 | string | `light` / `dark` | `light` |
| closable | 是否显示关闭按钮 | boolean | `true` / `false` | `true` |
| title | 内容 | string | - | - |