import LoadHistory from 'Pages/LoadHistory'
import LoadDetail from 'Pages/LoadDetail'
import Chatbot from 'Pages/Chatbot'
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
