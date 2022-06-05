import axios from "axios";

export function http <T>(method: 'GET'|'POST', url: string, params?: any): Promise<T | any>  {
    const options = {
    method: method,
    url: url,
    params: params,
    headers: {
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      'X-RapidAPI-Key': 'da5f72566fmshae28595683c0adap1c5609jsn070d55f2d1cf'
    }
  }
  return axios.request<T>(options);
};
