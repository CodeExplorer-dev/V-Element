<script setup lang="ts">
import { onMounted, reactive, ref, h } from 'vue';
import type { Options } from '@popperjs/core'
import type { NameType } from './components/Collapse/types';
import type { MenuOption } from './components/Dropdown/types';
import type { TooltipInstance } from './components/Tooltip/types.ts';
import type { ButtonInstance } from './components/Button/types.ts';
import type { DropdownInstance } from './components/Dropdown/types.ts';
import Button from '@/components/Button/Button.vue';
import Collapse from '@/components/Collapse/Collapse.vue';
import CollapseItem from '@/components/Collapse/CollapseItem.vue';
import VNode from './components/VNode.tsx';
import Icon from '@/components/Icon/Icon.vue'
import Alert from '@/components/Alert/Alert.vue';
import Toolip from './components/Tooltip/Tooltip.vue';
import Dropdown from './components/Dropdown/Dropdown.vue';
import Message from './components/Message/Message.vue';
import Input from './components/Input/Input.vue';
import Switch from './components/Switch/Switch.vue';

import { createPopper } from '@popperjs/core'
import { createMessage } from './components/Message/methods.ts';


const openedValue = ref<NameType[]>(['a']);
const buttonRef = ref<ButtonInstance | null>(null)
const tooltipRef = ref<TooltipInstance | null>(null)
const dropdownRef = ref<DropdownInstance | null>(null)


const datas = reactive([
  { name: 'a', title: 'titleA', content: 'content a' },
  { name: 'b', title: 'titleB', content: 'content b' },
  { name: 'c', title: 'titleC', content: 'content c' }
])

const overlayNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()

const options: Partial<Options> = {
  placement: 'right-end',
  strategy: 'fixed'
}

const menuOptions: MenuOption[] = [
  { key: 1, label: 'item1asdasd'},
  { key: 2, label: 'item2' },
  { key: 3, label: 'item3', disabled: true, divided: true},
  { key: 4, label: 'item4' },
]

const inputValue = ref('')

const open = () => {
  dropdownRef.value?.show()
}

const close = () => {
  dropdownRef.value?.hide()
}

const inlineConsole = (...args: any) => {
  console.log(...args)
}

const test = ref('right')

onMounted(() => {
  createMessage({ message: 'Hello World one', duration: 0, showClose: true, type: 'success' })
  createMessage({ message: 'Hello World two',duration: 0, showClose: true, type: 'info' })
  createMessage({ message: 'Hello World three',duration: 0, showClose: true, type: 'warning' })
  createMessage({ message: 'Hello World four',duration: 0, showClose: true, type: 'danger' })
  if(overlayNode.value && triggerNode.value) {
    createPopper(triggerNode.value, overlayNode.value, {
      placement: 'right'
    })
  }

  // setTimeout(() => {
  //   // instance.destory()
  // }, 2000)
})

</script>

<template>

  <Dropdown 
    trigger="click" 
    placement="bottom"
    :menu-options="menuOptions"
    @visible-change="e => inlineConsole('visible-change', e)"
    @select="e => inlineConsole('select', e)"
  >
    <img src="./assets/img.png" alt="Vue logo" width="125" height="125" />
  </Dropdown>

  <Toolip trigger="hover" placement="right" ref="tooltipRef">
    <img src="./assets/img.png" alt="Vue logo" width="125" height="125" />
    <template #content>
      <h1>Hello Tooltip</h1>
    </template>
  </Toolip>

  <Icon icon="arrow-up" size="2xl" type="danger"/>
  <Icon icon="arrow-down" size="2xl" color="red"/>

  <div>
    <Button @click="open">SHOW</Button>
    <Button @click="close">HIDE</Button>

    <Button>default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <Button type="info">Info</Button>
    <Button disabled>Disabled</Button>
  </div>
  <div>
    <Button plain>default</Button>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button>
    <Button type="info" plain>Info</Button>
  </div>
  <div>
    <Button round>default</Button>
    <Button type="primary" round>Primary</Button>
    <Button type="success" round>Success</Button>
    <Button type="warning" round>Warning</Button>
    <Button type="danger" round>Danger</Button>
    <Button type="info" round>Info</Button>
  </div>
  <div>
    <Button size="large" loading>Loading</Button>
    <Button type="primary" size="large" icon="arrow-down">下面</Button>
  </div>

  <Collapse v-model="openedValue" icon-position="left">
    <CollapseItem v-for="item in datas" :key="item.name" :name="item.name" :title="item.title">
      <!-- <template #title>
        <h1>title for a</h1>
      </template> -->
      <h2>{{ item.content }}</h2>
      <p>hello world</p>
    </CollapseItem>
  </Collapse>
  {{ openedValue }}

  <Alert title="primary" type="primary" closable style="width: 500px;"/>
  <Alert title="success" type="success" style="width: 500px;"/>
  <Alert title="primary" type="primary" effect="dark" closable style="width: 500px;"/>
 
  <Alert title="success" type="success" closable />
  <Alert title="success" type="success" effect="dark" closable/>

  <Alert title="warning" type="warning" closable/>
  <Alert title="warning" type="warning" effect="dark" closable/>

  <Alert title="danger" type="danger" closable/>
  <Alert title="danger" type="danger" effect="dark" closable/>

  <Alert title="info" type="info" closable/>
  <Alert type="info" effect="dark" closable >
    <template #title>
      <strong>自定义内容</strong>
    </template>
  </Alert>

  <VNode msg="Hello VNode"/>

  <Input v-model="inputValue" type="text" placeholder="请输入" ></Input>{{ inputValue }}
  <Input v-model="inputValue" type="text" placeholder="请输入" disabled></Input>>
  <Input v-model="inputValue" type="text" placeholder="请输入" size="large"></Input>
  <Input v-model="inputValue" type="text" placeholder="请输入" size="normal"></Input>
  <Input v-model="inputValue" type="text" placeholder="请输入" size="small"></Input>
  <Input v-model="inputValue" type="text" placeholder="请输入">
    <template #prepend>Prepend</template>
    <template #append>Append</template>
  </Input>

  <Input v-model="inputValue" type="text" placeholder="请输入">
    <template #prefix>
      <Icon icon="fa-user" />
    </template>
    <template #suffix>
      <Icon icon="fa-user" />
    </template>
  </Input>

  <Input v-model="inputValue" type="textarea" placeholder="请输入"></Input>
  <Input v-model="inputValue" type="text" placeholder="请输入" show-password></Input>
  <Input v-model="inputValue" type="text" placeholder="请输入" clearable></Input>

  <Switch v-model="test" active-value="right" inactive-value="wrong" />

  <Switch v-model="test" activeText="ON" inactiveText="OFF" />
  <Switch v-model="test" disabled/>
</template>

