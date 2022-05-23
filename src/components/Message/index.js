import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Message = (message, type) => {
    switch (type) {
        case "error":
            toast.error(message);
            break;
        case "success":
            toast.success(message);
            break;

        default:
            toast(message);
            break;
    }
}

export default Message;