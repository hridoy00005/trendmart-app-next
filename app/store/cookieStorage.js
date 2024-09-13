import Cookies from 'js-cookie';

const cookieStorage = {
  getItem: (key) => {
    return Promise.resolve(Cookies.get(key) || null); 
  },
  setItem: (key, value) => {
    Cookies.set(key, value, { expires: 7 }); 
    return Promise.resolve(value); 
  },
  removeItem: (key) => {
    Cookies.remove(key); 
    return Promise.resolve(); 
  },
};

export default cookieStorage;
