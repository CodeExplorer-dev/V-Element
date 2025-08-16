import { onMounted, onBeforeUnmount, isRef, watch, unref } from "vue";
import type { Ref } from "vue";


export default function useEventListener(
  target: EventTarget | Ref<EventTarget | null>,
  event: string,
  handler: (e: Event) => any
) {
  if(isRef(target)) {
    watch(target, (value, oldvalue) => {
      oldvalue?.removeEventListener(event, handler);
      value?.addEventListener(event, handler);
    })
  } else {
    onMounted(() => {
      target.addEventListener(event, handler);
    })
  }

  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, handler);
  })
}