import LoadHistory from 'Pages/LoadHistory'
import LoadDetail from 'Pages/LoadDetail'
import Chatbot from 'Pages/Chatbot'

export const RoutesName = [
  {
    path: '/driver',
    component: LoadHistory
  },
  {
    path: '/loadDetail/:loadId',
    component: LoadDetail
  },
  {
    path: '/chatbot/:loadId',
    component: Chatbot
  }
]

export default RoutesName
