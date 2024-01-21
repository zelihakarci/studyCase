import {call} from '../call';

import {TAGS_LIST, PROMOTIONS_LIST, PROMOTIONS} from '../endpoints';
import {
  IPromotionsDetail,
  ITagsResponse,
  IPromotionsListResponse,
} from '../../lib/DTOs';

export const getTagsList = async (): Promise<ITagsResponse> => {
  return call.get({
    url: TAGS_LIST,
  });
};

export const getPromotions = async (): Promise<IPromotionsListResponse> => {
  return call.get({
    url: PROMOTIONS_LIST,
  });
};

export const getPromotionsDetail = async (
  Id: number,
): Promise<IPromotionsDetail> => {
  return call.get({
    url: PROMOTIONS + '?Id=' + Id,
  });
};
