import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quiz_list: [
    {
      Q: '사과를 고르시오',
      A: ['사과', '배', '귤', '포도', '파인애플'],
      correctAnswer: '사과',
      score: 3,
      type: 'basic',
    },
    {
      Q: '서울을 고르시오',
      A: ['대전', '부산', '서울', '강원도', '인천'],
      correctAnswer: '서울',
      score: 5,
      type: 'basic',
    },
    {
      Q: '영희를 고르시오',
      A: ['철수', '윤수', '민영', '영희', '지희'],
      correctAnswer: '영희',
      score: 2,
      type: 'basic',
    },
  ],
  userScore: 0,
}

const quizList = createSlice({
  name: 'quizList',
  initialState,
  reducers: {
    setAnswer: () => {},
    setScore: (state, action) => {
      const userAnswers = action.payload
      let totalScore = 0

      console.log(userAnswers)

      userAnswers.forEach((answer, index) => {
        if (answer === state.quiz_list[index].correctAnswer) {
          totalScore += state.quiz_list[index].score
        }
      })
      state.userScore = totalScore
    },
  },
})

export const { setAnswer, setScore } = quizList.actions

export default quizList
