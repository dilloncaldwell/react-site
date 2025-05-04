import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectHandler() {
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      let cleanRedirect = redirect;
      if (cleanRedirect.startsWith(base)) {
        cleanRedirect = cleanRedirect.slice(base.length);
      }
      params.delete('redirect');
      navigate(cleanRedirect || '/', { replace: true });
    }
  }, [navigate, base]);

  return null;
}
