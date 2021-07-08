import { ref, watch, onMounted, computed } from 'vue'

export function useDarkTheme() {

  const store = ref(localStorage.getItem('horek-mode') || 'dark')

  const isDark = computed({
    get() {
      return store.value == 'dark'
    },
    set(v) {
      store.value = v ? 'dark' : 'light'
    }
  })

  const onChanged = (v) => {
    localStorage.setItem('horek-mode', v ? 'dark' : 'light')
    
    const el = window?.document.querySelector('html')
    el?.classList.toggle('dark', v)
  }

  watch(isDark, onChanged, { flush: 'post' })

  onMounted(() => onChanged(isDark.value))

  return isDark
}

export function useToggle(item) {
  return () => (item.value = !item.value)
}