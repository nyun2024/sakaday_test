import { createHashRouter } from 'react-router-dom'
import Home from '@pages/Home'
import InputUserName from '@pages/inputUserName/InputUserName'
import Quiz from '@pages/quiz/Quiz'
import ResultScore from '@pages/result/ResultScore'

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/UseName',
      element: <InputUserName />,
    },
    {
      path: '/Quiz',
      element: <Quiz />,
    },
    {
      path: '/ResultScore',
      element: <ResultScore />,
    },
  ],
  { basename: '/' },
)

export default router
