import { showAlert } from "./actions"
import { CREATE_POST } from "./types"

const forbidden = [
  'fuck',
  'spam',
  'test'
]

export function forbiddenWordsMiddleware({dispatch}){
  return function(next){
    return function(action){
      if(action.type === CREATE_POST){
        
        const found = forbidden.filter(w => {
          
          return action.payload.title.toLowerCase().includes(w.toLowerCase())
        })
        if(found.length > 0) {
          return dispatch(showAlert(`В заголовке найдены запрещённые слова: ${found.join(' ')}`))
        }
      }
      return next(action)
    }
  }
}