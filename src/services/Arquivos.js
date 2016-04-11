import axios from 'axios';
import { stores, services } from 'sdk';

const workspace = services.storefront.defaultHeaders['x-vtex-workspace'];

export default function uploadImage(file) {
  const accountName = stores.ContextStore.getState().get('accountName');
  const uploadImageResource = `/_resources/arquivos@vtex.banner/${accountName}/images/`;

  const data = new FormData();
  data.append('image', file);

  const relativePath = uploadImageResource + file.name;

  const headers = {
    'x-vtex-workspace': workspace || 'master',
    'Accept': '*/*'
  };

  return axios.put(relativePath, data, { headers });
}
