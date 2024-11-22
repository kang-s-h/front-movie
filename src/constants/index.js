export const BASE_URL = process.env.BASE_URL;
export const IMAGE_URL = process.env.IMAGE_URL;

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.AUTH_TOKEN_1}`,
  },
};

export const options2 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.AUTH_TOKEN_2}`,
  },
};
