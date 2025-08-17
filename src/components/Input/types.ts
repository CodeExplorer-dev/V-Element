export interface InputProps {
  type: string,
  modelValue: string,
  size?: 'large' | 'small' | 'normal',
  clearable?: boolean,
  disabled?: boolean,
  showPassword?: boolean,
  placeholder?: string,
  readonly?: boolean,
  autocomplete?: string,
  autofocus?: boolean,
  form?: string,
}

export interface InputEmits {
  (e: 'update:modelValue', value: string): void;
  // input 事件指的是输入框内容有变化就触发
  (e: 'input', value: string): void;
  // change 事件指的是输入框内容变化，并且失去焦点时触发
  (e: 'change', value: string): void;
  (e: 'focus', value: FocusEvent): void;
  (e: 'blur', value: FocusEvent): void;
  (e: 'clear'): void;
}