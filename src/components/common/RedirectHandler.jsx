import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      params.delete('redirect');
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return null;
}
