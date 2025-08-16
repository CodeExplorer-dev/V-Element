export type AlertType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface AlertProps {
  title?: string,
  type?: AlertType,
  effect?: 'dark' | 'light',
  closable?: boolean
}

export interface AlertEmits {
  (event: 'close'): void
}