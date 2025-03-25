import Home from '@pages/Home'
import { createHashRouter } from 'react-router-dom'
import Quiz from '@pages/quiz/Quiz'

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
  ],
  { basename: '/' },
)

export default router
