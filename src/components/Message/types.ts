import type { ComponentInternalInstance, VNode } from "vue";

export interface MessageProps {
  message?: string | VNode;
  duration?: number;
  type?: "success" | "warning" | "info" | "danger";
  showClose?: boolean;
  onDestroy: () => void; // 组件内部必需
  offset?: number
  id: string,
  zIndex: number,
  transitionName?: string
}

export interface MessageContext {
  id: string,
  vnode: VNode,
  vm: ComponentInternalInstance,
  props: MessageProps,
  destory: () => void
}

export type CreateMessageProps = Omit<MessageProps, 'onDestroy' | 'id' | 'zIndex'>;