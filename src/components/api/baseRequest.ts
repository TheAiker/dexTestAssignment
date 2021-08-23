import axios, { Method } from "axios";
import { API_BASE_URL } from "./constants";

export async function baseRequest<Request, Response>(
  method: Method,
  path: string,
  data: Request
): Promise<Response> {
  const response = await axios.request<Response>({
    method: method,
    url: path,
    data: data,
  });

  return response.data;
}


export const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar',
        "Authorization": `Bearer `
    }
  });
