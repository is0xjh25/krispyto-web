// utilities/Utilities.js

import { useEffect } from 'react';
import Cookies from 'js-cookie';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

const setCookie = (name, value, days) => {
  Cookies.set(`${name}`, `${value}`, { expires: days, secure: true, SameSite: 'None' });
  return name;
};

const getCookie = name => {
  const cookie = Cookies.get(`${name}`);
  return cookie ? cookie : "";
};

const deleteCookie = name => {
  Cookies.remove(`${name}`);
};

export { useScript, setCookie, getCookie, deleteCookie };