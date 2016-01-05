import axios from 'axios';
import { stores } from 'sdk';

export default function uploadImage(file) {
  const accountName = stores.ContextStore.getState().get('accountName');
  let uploadImageResource = `/_resources/arquivos@vtex.banner/${accountName}/images/`;
  let data = new FormData().append('image', file, file.name);
  let relativePath = uploadImageResource + file.name;
  let workspace = (`; ${document.cookie}`).split('; vtex_workspace=').pop().split(';').shift();
  let headers = {
    'x-vtex-workspace': workspace || 'master',
    'Accept': '*/*'
  };

  return axios.post(relativePath, data, { headers });
}
