import {client} from './client';

interface PostParams<T> {
  url: string;
  body: T;
}
interface GetParams<T> {
  url: string;
  params?: T;
}

const post = async <T, D>(p: PostParams<T>): Promise<D> => {
  const {data} = await client.post<D>(p.url, p.body).finally(() => {});

  return data;
};

const get = async <T, D>(p: GetParams<T>): Promise<D> => {
  const {data} = await client
    .get<D>(p.url, {
      params: p.params,
    })
    .finally(() => {});

  return data;
};

export const call = {post, get};
