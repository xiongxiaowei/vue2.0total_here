import Hello from './components/Hello'
import News from './components/news'
import Sports from './components/sports'
const routes = [
  {path: '/news', component: News},
  {path: '/sports', component: Sports},
    {path: '/', component: Hello},
    {path: '*', redirect: '/'}
]
export default routes
