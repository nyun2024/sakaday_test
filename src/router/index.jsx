import Home from '@pages/Home'
import { createHashRouter } from 'react-router-dom'
import Quiz from '@pages/quiz/Quiz'
import ResultScore from '@pages/result/ResultScore'

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Home />,
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
