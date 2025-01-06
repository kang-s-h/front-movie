export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
export const DETAIL_URL = import.meta.env.VITE_DETAIL_URL;
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN_1}`,
  },
};

export const options2 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN_2}`,
  },
};

export const options3 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN_3}`,
  },
};
