import Home from '@pages/Home'
import { createHashRouter } from 'react-router-dom'

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
  ],
  { basename: '/' },
)

export default router
