import { createSlice } from '@reduxjs/toolkit'
import nagumo01 from '@img/quizImg/nagumo01.jpg'
import nagumo02 from '@img/quizImg/nagumo02.jpg'
import nagumo03 from '@img/quizImg/nagumo03.jpg'
import nagumo04 from '@img/quizImg/nagumo04.jpg'
import nagumoDialogue from '@img/quizImg/nagumo_dialogue.jpg'
import nagumoDialogue02 from '@img/quizImg/nagumo_dialogue02.jpg'
import sakamotoDialogue from '@img/quizImg/sakamoto_dialogue.jpg'
import osaragiDialogue from '@img/quizImg/osaragi_dialogue.jpg'

const initialState = {
  quizList: [
    {
      Q: '사카모토에게 걸린 현상금을 노리고 접근한 킬러들이 위장한 직업이 [[아닌]] 것을 고르시오. (4점)',
      A: ['환경미화원', '피자 배달부', '요리사', '열차승객', '웨이터'],
      correctAnswer: '열차승객',
      score: 4,
      type: 'normal',
      hint: '1~4권에서 찾아보세요.',
    },
    {
      Q: '나츠키의 무기 발명품이 [[아닌]] 것을 고르시오. (4점)',
      A: ['고밀도 액체 수소 폭탄', '스크림건', '투명수트', '파이어 슈즈', '전기총'],
      correctAnswer: '고밀도 액체 수소 폭탄',
      score: 4,
      type: 'normal',
      hint: '10권',
    },
    {
      Q: '다음 장면 중 나구모가 변장한 상태가 [[아닌]] 것을 고르시오. (7점)',
      A: [
        { a: 'nagumo01', img: nagumo01 },
        { a: 'nagumo02', img: nagumo02 },
        { a: 'nagumo03', img: nagumo03 },
        { a: 'nagumo04', img: nagumo04 },
      ],
      correctAnswer: 'nagumo02',
      score: 7,
      type: 'imgDisableText',
      hint: '1권, 13권, 6권, 18권에서 찾아보세요.',
    },
    {
      Q: '신이 작성한 흔한 학교 클리셰 리스트가 [[아닌]] 것은? (5점)',
      A: ['도서실에서 낮잠 자기', '수업시간 중 몰래 만화책 보기', '선배에게 다구리 당하기', '수업빠지고 화장실에서 담배피우기', '매점으로 질주하기'],
      correctAnswer: '수업시간 중 몰래 만화책 보기',
      score: 5,
      type: 'normal',
      hint: '9권',
    },
    {
      Q: '세기의 킬러전에서 나구모가 가쿠와 싸웠을 때 사용한 무기의 순서로 [[올바른]] 것은? (6점)',
      A: ['낫-도끼-쌍칼-투명한 칼날', '낫-쌍칼-해머-투명한 칼날', '쌍칼-낫-해머-투명한 칼날', '쌍칼-해머-낫-투명한 칼날', '쌍칼-낫-도끼-투명한 칼날'],
      correctAnswer: '쌍칼-낫-도끼-투명한 칼날',
      score: 6,
      type: 'normal',
      hint: '17권',
    },
    {
      Q: 'JCC에 관한 설명으로 [[옳은]] 것은? (5점)',
      A: ['졸업생 중 3할이 킬러 라이센스 획득이 가능하다', '3년제 이다', '남녀비율이 7대 3이다', '전원 기숙사제이다', '학생수가 2000명에 육박한다'],
      correctAnswer: '전원 기숙사제이다',
      score: 5,
      type: 'normal',
      hint: '7권',
    },
    {
      Q: '사카모토와 나구모가 JCC시절에 받은 발렌타인 초콜릿 개수를 더한 값은? (숫자만) (7점)',
      correctAnswer: '244',
      score: 7,
      type: 'input',
      hint: '2권',
    },
    {
      Q: '살연 직속 특무기관인 오더를 처음 설립한 인물로 옳은 것을 [[모두]] 고르시오. (5점)',
      A: ['아사키', '킨다카', '타카무라', '요츠무라', '오키'],
      correctAnswer: ['킨다카', '요츠무라'],
      score: 5,
      type: 'multiple',
      hint: '13권',
    },
    {
      Q: '가쿠가 사용한 기술 중 하나로 중국 무술에서의 발경의 일종이며 예비 동작없이 가까운 거리에서 공격을 가할 수 있는 이 기술의 이름은? (5점)',
      correctAnswer: '촌경',
      score: 5,
      type: 'input',
      hint: 'ㅊㄱ',
    },
    {
      Q: '세기의 킬러전이 열린 날과 장소로 [[옳은]] 것은? (4점)',
      A: ['9월 17일 가나자와 21세기 미술관', '9월 18일 오쿠타비 신국립 미술관', '9월 19일 아다치 미술관', '9월 20일 혼마 미술관', '9월 21일 도와다시 현대 미술관'],
      correctAnswer: '9월 18일 오쿠타비 신국립 미술관',
      score: 4,
      type: 'normal',
      hint: '15권',
    },
    {
      Q: '사카모토 데이즈 단행본과 표지 캐릭터가 [[틀리게]] 짝 지어진 것은? (4점)',
      A: ['3권 - 마시모 헤이스케', '7권 - 시시바', '10권 - 우즈키 케이', '12권 - 카나구리', '17권 - 마후유'],
      correctAnswer: '7권 - 시시바',
      score: 4,
      type: 'normal',
      hint: ' ',
    },
    {
      Q: '사카모토가 세기의 킬러전에 출품하려고 한 권총의 기종 이름은? (띄어쓰기 포함) (6점)',
      correctAnswer: '콜트 거버먼트',
      score: 6,
      type: 'input',
      hint: 'ㅋㅌ ㄱㅂㅁㅌ',
    },
    {
      Q: '다음 장면의 대사 중 [[틀린]] 것을 고르시오. (6점)',
      A: [
        { a: '어떤 걸로 가볼래?', img: nagumoDialogue },
        { a: '킬러는 천국에 못가', img: sakamotoDialogue },
        { a: '고마워, 너무 좋아', img: osaragiDialogue },
        { a: '살인에 정의가 어디있고 악이 어디있어', img: nagumoDialogue02 },
      ],
      correctAnswer: '어떤 걸로 가볼래?',
      score: 6,
      type: 'img',
      hint: '6권, 12권, 5권, 9권에서 찾아보세요.',
    },
    {
      Q: 'JCC에 있는 학과가 [[아닌]] 것은? (4점)',
      A: ['암살 특수과', '무기 제조과', '첩보 활동과', '독살과', '무투과'],
      correctAnswer: '무투과',
      score: 4,
      type: 'normal',
      hint: '7권',
    },
    {
      Q: '나구모와 사형수 미니멀리스트의 전투 중 나구모가 굴려서 나온 주사위의 숫자와 사용한 무기가 [[올바르게]] 짝 지어진 것은? (4점)',
      A: ['4 - 연회용 캔따개', '4 - 도끼', '3 - 쌍칼', '3 - 연회용 캔따개', '3 - 도끼'],
      correctAnswer: '3 - 연회용 캔따개',
      score: 4,
      type: 'normal',
      hint: '6권',
    },
    {
      Q: 'JCC 역대 사격기록 순위로 [[올바른]] 것은? (5점)',
      A: ['헤이스케-사카모토-나구모-리온', '헤이스케-리온-사카모토-나구모', '헤이스케-사카모토-리온-나구모', '사카모토-헤이스케-나구모-리온', '사카모토-헤이스케-리온-나구모'],
      correctAnswer: '헤이스케-사카모토-리온-나구모',
      score: 5,
      type: 'normal',
      hint: '9권',
    },
    {
      Q: '임무 후 부서진 현장을 청소하고 복구하는 일을 하는 살연소속 사후 처리 부대의 이름은? (5점)',
      correctAnswer: '플로터',
      score: 5,
      type: 'input',
      hint: 'ㅍㄹㅌ',
    },
    {
      Q: '세기의 킬러전에서 하루마가 전투 중에 접목시킨 스포츠를 [[모두]] 고르시오. (6점)',
      A: ['미식축구', '복싱', '핸드볼', '원반 던지기', '볼링'],
      correctAnswer: ['미식축구', '핸드볼', '원반 던지기', '볼링'],
      score: 6,
      type: 'multiple',
      hint: '18권',
    },
    {
      Q: '제 1회 인기투표 순위로 [[옳은]] 것은? (4점)',
      A: ['나구모-신-오사라기-시시바-사카모토', '나구모-신-시시바-오사라기-사카모토', '신-나구모-시시바-오사라기-사카모토', '신-나구모-시시바-사카모토-오사라기', '신-나구모-오사라기-시시바-사카모토'],
      correctAnswer: '신-나구모-오사라기-시시바-사카모토',
      score: 4,
      type: 'normal',
      hint: '13권',
    },
    {
      Q: '세기의 킬러전 이후 새로 스카우트된 오더로 [[옳은]] 것을 [[모두]] 고르시오. (4점)',
      A: ['오키', '무토', '타나바타', '토레스', '스즈키'],
      correctAnswer: ['타나바타', '토레스'],
      score: 4,
      type: 'multiple',
      hint: '19권',
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
