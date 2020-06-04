import Axios from 'axios';

import { api } from './config';

export const callAPI = (uri, method = `GET`, body, headers) => {
  return Axios({
    method: method,
    url: api + `/` + uri,
    data: body,
    headers: headers,
  });
};
