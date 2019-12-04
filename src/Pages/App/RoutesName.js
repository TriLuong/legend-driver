import LoadHistory from 'Pages/LoadHistory'
import LoadDetail from 'Pages/LoadDetail'
import Chatbot from 'Pages/Chatbot'
import ChatbotHistory from 'Pages/ChatbotHistory'
// import { ResetPassword, ForgotPassword } from 'Pages/Login'

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
    path: '/chatbotHistory/:loadId',
    component: ChatbotHistory
  },
  {
    path: '/chatbot/:loadId',
    component: Chatbot
  }
  // {
  //   path: '/resetPassword',
  //   component: ResetPassword
  // },
  // {
  //   path: '/forgotPassword',
  //   component: ForgotPassword
  // }
]

export default RoutesName
