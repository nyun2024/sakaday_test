import { createSlice } from '@reduxjs/toolkit'
import sakamoto from '@img/character/sakamoto.jpg'
import shin from '@img/character/shin.jpg'
import nagumo from '@img/character/nagumo.jpg'
import natsuki from '@img/character/natsuki.jpg'

const initialState = {
  quizList: [
    {
      Q: `사카모토에게 걸린 현상금을 노리고 접근한 킬러들이 위장한 직업이 [[아닌]] 것을 고르시오.`,
      A: [
        { a: 'A', img: sakamoto },
        { a: 'B', img: shin },
        { a: 'C', img: nagumo },
        { a: 'D', img: natsuki },
      ],
      correctAnswer: 'C',
      score: 10,
      type: 'img',
      hint: '가나다',
    },
    {
      Q: 'BB를 고르시오.',
      A: [
        { a: 'AA', img: sakamoto },
        { a: 'BB', img: shin },
        { a: 'CC', img: nagumo },
        { a: 'DD', img: natsuki },
      ],
      correctAnswer: 'BB',
      score: 10,
      type: 'imgDisableText',
      hint: '라바사',
    },
    {
      Q: '사과를 고르시오',
      A: ['사과', '배', '귤', '포도', '파인애플'],
      correctAnswer: '사과',
      score: 10,
      type: 'normal',
      hint: '아자차',
    },
    {
      Q: '서울을 고르시오',
      A: ['대전', '부산', '서울', '강원도', '인천'],
      correctAnswer: '서울',
      score: 10,
      type: 'normal',
      hint: '안녕안녕녕',
    },
    {
      Q: '안녕을 입력하세요',
      correctAnswer: '안녕',
      score: 20,
      type: 'input',
      hint: '호호호호',
    },
    {
      Q: '나구모와 신을 고르시오.',
      A: ['나구모', '타로', '신', '리온', '가쿠'],
      correctAnswer: ['나구모', '신'],
      score: 20,
      type: 'multiple',
      hint: '감사감사',
    },
    {
      Q: '영희를 고르시오',
      A: ['철수', '윤수', '민영', '영희', '지희'],
      correctAnswer: '영희',
      score: 20,
      type: 'normal',
      hint: '끝끝끝',
    },
  ],
  userScore: 0,
}

const quizList = createSlice({
  name: 'quizList',
  initialState,
  reducers: {
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
      localStorage.setItem('userScore', totalScore)
      console.log(state.userScore)
    },
  },
})

export const { setScore } = quizList.actions

export default quizList
