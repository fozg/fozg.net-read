import {apiEndpoint} from './consts'

import { stringify } from 'querystring';

function buildUrl(url, parameters) {
  let qs = "";
  for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
          const value = parameters[key];
          qs +=
              encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
      }
  }
  if (qs.length > 0) {
      qs = qs.substring(0, qs.length - 1); //chop off last "&"
      url = url + "?" + qs;
  }

  return url;
}

export class callAPI {
  constructor(url, method, body) {
    this.url = url;
    this.method = method;
    this.body = body;
  }

  async GET (query) {
    return fetch(buildUrl(this.url, query), {
      mode: 'cors',
      method: 'GET',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    }).then(res => res.json())
  }

  async call () {
    switch(this.method) {
      case 'GET':
        return this.GET(this.body);
      default: 
        return new Error('Wrong method');
    }
  }
}



// export let _fetchGET = (url, params) => {
//   let token = localStorage.getItem('token');
//   if (token === null) {
//     throw new Error('Forbiden')
//   };
//   console.log('_fetchGET', {params})
//   return fetch(buildUrl(url, params), {
//     mode: 'cors',
//     headers: {
//       "Authorization": 'Bearer ' + token,
//     },
//   }).then(res => res.json());
// }

// export let _fetchPOST = (url, body) => {
//   let token = localStorage.getItem('token');
//   if (token === null) {
//     throw new Error('Forbiden')
//   };
//   return fetch(url, {
//     mode: 'cors',
//     method: 'POST',
//     headers: {
//       "Authorization": 'Bearer ' + token,
//       "Content-Type": "application/json; charset=utf-8",
//     },
//     body: JSON.stringify(body)
//   }).then(res => res.json());
// }

// export let _fetchPUT = (url, body) => {
//   let token = localStorage.getItem('token');
//   if (token === null) {
//     throw new Error('Forbiden')
//   };
//   return fetch(url, {
//     mode: 'cors',
//     method: 'PUT',
//     headers: {
//       "Authorization": 'Bearer ' + token,
//       "Content-Type": "application/json; charset=utf-8",
//     },
//     body: JSON.stringify(body)
//   }).then(res => res.json());
// }