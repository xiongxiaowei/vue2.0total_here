import Hello from '@/components/Hello'
import News from '../components/news'
import Sports from '../components/sprots'
const routes = [
  routes: [
    {path: '/news', component: News},
    {path: '/sports', component: Sports},
    {path: '/', component: Hello},
    {path: '*', redirect: '/home'}
  ]
export default routes
