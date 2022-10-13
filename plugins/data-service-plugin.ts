import { DataService } from '../services/DataService'
export default defineNuxtPlugin(() => {
  return {
    provide: {
      DS: new DataService()
    }
  }
})
