import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore(
  'message',
  () => {
    const message = ref('这是主应用pinia实例')
    const setMessage = (newMessage) => {
      message.value = newMessage
    }
    return {
      message,
      setMessage,
    }
  },
  {
    persist: true,
  }
)
