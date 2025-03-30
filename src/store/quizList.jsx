import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quizList: [
    {
      Q: '사과를 고르시오',
      A: ['사과', '배', '귤', '포도', '파인애플'],
      correctAnswer: '사과',
      score: 3,
      type: 'normal',
    },
    {
      Q: '서울을 고르시오',
      A: ['대전', '부산', '서울', '강원도', '인천'],
      correctAnswer: '서울',
      score: 5,
      type: 'normal',
    },
    {
      Q: '안녕을 입력하세요',
      correctAnswer: '안녕',
      score: 10,
      type: 'input',
    },
    {
      Q: '나구모와 신을 고르시오.',
      A: ['나구모', '타로', '신', '리온', '가쿠'],
      correctAnswer: ['나구모', '신'],
      score: 8,
      type: 'multiple',
    },
    {
      Q: '영희를 고르시오',
      A: ['철수', '윤수', '민영', '영희', '지희'],
      correctAnswer: '영희',
      score: 2,
      type: 'normal',
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
        if (state.quizList[index].type !== 'multiple' && answer === state.quizList[index].correctAnswer) {
          totalScore += state.quizList[index].score
        } else if (state.quizList[index].type === 'multiple' && JSON.stringify(answer.sort()) === JSON.stringify(state.quizList[index].correctAnswer.sort())) {
          totalScore += state.quizList[index].score
        }
      })
      state.userScore = totalScore
      console.log(state.userScore)
    },
  },
})

export const { setAnswer, setScore } = quizList.actions

export default quizList
