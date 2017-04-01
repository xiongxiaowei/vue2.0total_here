import Hello from './components/Hello'
import News from './components/news'
import Sports from './components/sports'
const routes = [
  {path: '/', component: Hello},
  {path: '/news', component: News},
  {path: '/sports', component: Sports}
]
export default routes
