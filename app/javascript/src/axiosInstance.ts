import axios from "axios";
import { useRecoilValue } from 'recoil';
import { accessTokenAtom } from '@src/states/sessions';

const csrf = document.querySelector("meta[name='csrf-token']")?.getAttribute("content");
const token = useRecoilValue(accessTokenAtom);

axios.defaults.headers.common = {
  ...axios.defaults.headers.common,
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  Authorization: token,
};

axios.defaults.headers.post['X-CSRF-Token'] = csrf;

const handleNormalResponse = (res) => {
  return res;
}

const handleErrorResponse = (res) => {
  if (res.status == 401) {
    const newResponse = axios.request(res.config);

    return newResponse;
  }
  return Promise.reject(res);;
}
axios.interceptors.response.use(handleNormalResponse, handleErrorResponse)

export default axios;
