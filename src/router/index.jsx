import Home from '@pages/Home'
import { createHashRouter } from 'react-router-dom'
import Quiz01 from '@pages/quiz/Quiz01'

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/Quiz01',
      element: <Quiz01 />,
    },
  ],
  { basename: '/' },
)

export default router
