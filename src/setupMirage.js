import { Server } from 'miragejs';

export default function setupMirage({ environment = 'development' } = {}) {
  return new Server({
    environment,
    
    routes() {
      this.namespace = 'api'

      this.get('/timestamp', () => {
        return {
          timestamp: Date.now()
        }
      })
    }
  })
}