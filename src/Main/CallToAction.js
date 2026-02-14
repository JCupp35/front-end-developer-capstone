import { useNavigate } from 'react-router-dom';

function CallToAction() {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate('/booking')}>
      Reserve a Table
    </button>
  );
}

export default CallToAction;
