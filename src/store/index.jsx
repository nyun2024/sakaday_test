import { configureStore } from '@reduxjs/toolkit'
import quizList from './quizList'

const store = configureStore({
  reducer: {
    quizList: quizList.reducer,
  },
})

export default store
