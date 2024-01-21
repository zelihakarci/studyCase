export interface IBaseResponse {
  success: boolean;
  status: number;
  message?: string;
}
export interface ITagsResponse extends IBaseResponse {
  data: ITags[];
}
export interface ITags {
  IconUrl: string;
  Id: number;
  Name: string;
  Rank: number;
}
export interface IPromotionsListResponse extends IBaseResponse {
  data: IPromotionsList[];
}
export interface IPromotionsList {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  CardType: string;
  ExternalUrl: string;
  Id: number;
  ImageUrl: string;
  IsLuckyDay: boolean;
  ListButtonText: string;
  ListButtonTextBackGroudColor: string;
  LuckyDayBackgroundColor: string;
  LuckyDayText: string;
  LuckyDayTextColor: string;
  PromotionCardColor: string;
  RemainingText: string;
  ScenarioType: string;
  SeoName: string;
  Title: string;
  Unavailable: boolean;
  Unvisible: boolean;
}

export interface IPromotionsDetail extends IBaseResponse {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Contents: any;
  CountryTimeZone: number;
  Description: string;
  DetailButtonText: string;
  EndDate: string;
  GameWin: any;
  Id: number;
  ImageUrl: string;
  IsMapAvailable: boolean;
  ListButtonText: any;
  LuckyDayBackgroundColor: any;
  LuckyDayText: string;
  LuckyDayTextColor: any;
  NextFlowConfigurations: any;
  PromotionDetailItemAreas: any;
  PromotionGalleries: any;
  PromotionTags: any;
  RemainingText: string;
  ScenarioType: string;
  SeoName: string;
  StartDate: string;
  Title: string;
  Type: string;
  Unavailable: boolean;
  Unvisible: boolean;
}
