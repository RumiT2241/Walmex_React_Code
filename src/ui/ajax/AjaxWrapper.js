import axios from "axios"
import "regenerator-runtime/runtime"
const getHeaders=(config)=>{
    const defaultHeaders = {
      "Accept": 'application/json, text/plain',
      'Content-type': 'application/json',
    };
return Object.assign(defaultHeaders, config);
}
export const httpClient = async (
    url,
    requestMethod,
    data={},
    params={},
    config={}
  ) => {
    return await axios({
      url,
      method: requestMethod,
      data,
      params,
      headers: getHeaders(config)
    });
  };

  