import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles.scss'

function configure() {
  toast.configure({
    autoClose: 8000
  })
}

function showSuccess(message) {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar: true,
    autoClose: 3000,
    closeButton: false
  })
}

function showError(message) {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar: true,
    autoClose: 3000,
    closeButton: false
  })
}

export default { configure, showSuccess, showError }
