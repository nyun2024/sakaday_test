import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store/index'
import Home from '@pages/Home.jsx'
import Quiz from '@pages/quiz/Quiz.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/sakaday_test/" element={<Home />} />
        <Route path="/sakaday_test/Quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
)
