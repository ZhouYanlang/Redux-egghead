const Todo = (state,action) =>{
   switch(action.type){
     case 'ADD_TODO':
        return {
          id:action.id,
          text:action.text,
          completed:false
        }
     case 'TOGGLE_TODO':
        if(state.id !== action.id){
          return state;
        }
        return {
          ...state,
          completed:!state.completed
        }
     default:
       return state
   }
}

const Todos = (state=[],action) =>{
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        Todo(undefined,action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => Todo(t,action))
    default:
      return state;
  }
}
export default Todos