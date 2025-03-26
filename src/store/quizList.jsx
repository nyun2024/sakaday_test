import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quiz_list: [
    {
      Q: '사과를 고르시오',
      A: ['사과', '배', '귤', '포도', '파인애플'],
      score: 3,
      type: 'basic',
    },
    {
      Q: '서울을 고르시오',
      A: ['대전', '부산', '서울', '강원도', '인천'],
      score: 5,
      type: 'basic',
    },
    {
      Q: '영희를 고르시오',
      A: ['철수', '윤수', '민영', '영희', '지희'],
      score: 2,
      type: 'basic',
    },
  ],
  user_answer: [],
}

const quizList = createSlice({
  name: 'quizList',
  initialState,
  reducers: {
    setAnswer: () => {},
    setScore: () => {},
  },
})

export const { setAnswer, setScore } = quizList.actions

export default quizList
