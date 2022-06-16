import { useNavigate} from 'react-router-dom';

const GoToPage = (pathName) => {
    const navigate = useNavigate()
    navigate(pathName, { replace: true });
}

export default { GoToPage }