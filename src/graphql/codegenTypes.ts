export type Maybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** The list of type actions counter */
export type ActionsCounterEnum = 
  'modal_show' |
  'modal_close';

export type ActionsCounterType = {
  status: Maybe<Scalars['String']>;
};

/** A article */
export type Article = {
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  source: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  contentText: Maybe<Scalars['String']>;
};

/** Assist */
export type Assist = {
  number: Maybe<Scalars['String']>;
  player: Maybe<Player>;
};

/** A banner */
export type Banner = {
  img: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

/** BetCalc */
export type BetCalc = {
  headers: Maybe<Array<Maybe<Scalars['String']>>>;
  tables: Maybe<Array<Maybe<BetCalcTable>>>;
};

/** BetCalc */
export type BetCalcRate = {
  bookmaker: Maybe<Scalars['String']>;
  values: Maybe<Array<Maybe<Rate>>>;
  /** A logo */
  logo: Maybe<Scalars['String']>;
  link: Maybe<Scalars['String']>;
};


/** BetCalc */
export type BetCalcRateLogoArgs = {
  preset?: Maybe<Scalars['String']>;
};

/** Rate */
export type BetCalcRateItem = {
  bookmaker: Maybe<Scalars['String']>;
  value: Maybe<Scalars['Float']>;
  change: Maybe<Scalars['Float']>;
};

/** BetCalc */
export type BetCalcTable = {
  type: Maybe<Scalars['String']>;
  rates: Maybe<Array<Maybe<BetCalcRate>>>;
  max: Maybe<Array<Maybe<Scalars['Float']>>>;
  avg: Maybe<Array<Maybe<Scalars['Float']>>>;
};

/** BkmUrl */
export type BkmUrl = {
  bookmaker: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  hasVideo: Maybe<Scalars['Boolean']>;
};

/** BlockParticipant */
export type BlockParticipant = {
  order: Maybe<Scalars['Int']>;
  winner: Maybe<Scalars['Boolean']>;
  source_block_id: Maybe<Scalars['String']>;
  team: Maybe<Team>;
};

/** A bookmaker */
export type Bookmaker = {
  _id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  names: Maybe<Array<Maybe<MultiLangString>>>;
  description: Maybe<Scalars['String']>;
  overview: Maybe<Array<Maybe<BookmakerOverview>>>;
  color: Maybe<Scalars['String']>;
  logo: Maybe<Scalars['String']>;
  likes_count: Maybe<Scalars['Int']>;
  bonus: Maybe<Scalars['Float']>;
  bonus_currency: Maybe<Scalars['String']>;
  bonus_type: Maybe<Scalars['String']>;
  bonus_type_name: Maybe<Scalars['String']>;
  bonus_type_title: Maybe<Scalars['String']>;
  bonus_instructions: Maybe<Scalars['String']>;
  rating_value: Maybe<Scalars['Float']>;
  rating_position: Maybe<Scalars['Int']>;
  rate: Maybe<BookmakerRate>;
  reviews: Maybe<Array<Maybe<BookmakerReview>>>;
  benefits: Maybe<Array<Maybe<Scalars['String']>>>;
  drawbacks: Maybe<Array<Maybe<Scalars['String']>>>;
  properties: Maybe<Array<Maybe<BookmakerProperty>>>;
  promotions: Maybe<Array<Maybe<BookmakerPromotion>>>;
  is_like: Maybe<Scalars['Boolean']>;
  legal: Maybe<Scalars['Boolean']>;
  published: Maybe<Scalars['Boolean']>;
  reviewed_by_user: Maybe<Scalars['Boolean']>;
  has_promotions: Maybe<Scalars['Boolean']>;
  mobile_app: Maybe<BookmakerMobileApp>;
  has_app: Maybe<Scalars['Boolean']>;
};


/** A bookmaker */
export type BookmakerNamesArgs = {
  lang_keys?: Maybe<Array<Maybe<LangEnum>>>;
};


/** A bookmaker */
export type BookmakerReviewsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A bookmaker */
export type BookmakerBenefitsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A bookmaker */
export type BookmakerDrawbacksArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A bookmaker */
export type BookmakerPromotionsArgs = {
  lang?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  category_slug?: Maybe<Scalars['String']>;
  promoted?: Maybe<Scalars['Boolean']>;
};


/** A bookmaker */
export type BookmakerHas_PromotionsArgs = {
  lang?: Maybe<Scalars['String']>;
  category_slug?: Maybe<Scalars['String']>;
  promoted?: Maybe<Scalars['Boolean']>;
};

/** A bookmaker link */
export type BookmakerLink = {
  name: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

/** A bookmaker mobile application */
export type BookmakerMobileApp = {
  description: Maybe<Scalars['String']>;
  iosLink: Maybe<Scalars['String']>;
  androidLink: Maybe<Scalars['String']>;
  overview: Maybe<Array<Maybe<BookmakerMobileAppOverview>>>;
};

/** A bookmaker mobile application overview */
export type BookmakerMobileAppOverview = {
  title: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  benefits: Maybe<Array<Maybe<Scalars['String']>>>;
  drawbacks: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A bookmaker mobile application overview */
export type BookmakerMobileAppOverviewBenefitsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A bookmaker mobile application overview */
export type BookmakerMobileAppOverviewDrawbacksArgs = {
  limit?: Maybe<Scalars['Int']>;
};

/** A bookmaker detail */
export type BookmakerOverview = {
  title: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
};

/** A bookmaker promotion */
export type BookmakerPromotion = {
  _id: Maybe<Scalars['String']>;
  date_start: Maybe<Scalars['String']>;
  date_end: Maybe<Scalars['String']>;
  order: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  categories: Maybe<Array<Maybe<BookmakerPromotionCategory>>>;
  promoted: Maybe<Scalars['Boolean']>;
  likes_count: Maybe<Scalars['Int']>;
  dislikes_count: Maybe<Scalars['Int']>;
  is_like: Maybe<Scalars['Boolean']>;
  is_dislike: Maybe<Scalars['Boolean']>;
  published: Maybe<Scalars['Boolean']>;
  description: Maybe<Scalars['String']>;
  bonus: Maybe<Scalars['Float']>;
  bonus_currency: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};

/** A bookmaker promotion category */
export type BookmakerPromotionCategory = {
  slug: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  logo: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

/** A bookmaker property */
export type BookmakerProperty = {
  name: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
};

/** A bookmaker rate */
export type BookmakerRate = {
  avg: Maybe<Scalars['Float']>;
  range: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** A bookmaker rating */
export type BookmakerRating = {
  _id: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  bookmakers: Maybe<Array<Maybe<Bookmaker>>>;
};


/** A bookmaker rating */
export type BookmakerRatingBookmakersArgs = {
  limit?: Maybe<Scalars['Int']>;
};

/** A bookmaker review */
export type BookmakerReview = {
  _id: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  rate: Maybe<Scalars['Float']>;
  text: Maybe<Scalars['String']>;
  user_name: Maybe<Scalars['String']>;
  likes_count: Maybe<Scalars['Int']>;
  is_like: Maybe<Scalars['Boolean']>;
  is_mine: Maybe<Scalars['Boolean']>;
  comment: Maybe<Array<Maybe<BookmakerReviewComment>>>;
};

/** A bookmaker review comment */
export type BookmakerReviewComment = {
  _id: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  user_name: Maybe<Scalars['String']>;
  is_mine: Maybe<Scalars['Boolean']>;
  is_admin: Maybe<Scalars['Boolean']>;
};

/** A bookmaker review mutation response */
export type BookmakerReviewCommentMutationResponse = {
  comment: Maybe<BookmakerReviewComment>;
  review: Maybe<BookmakerReview>;
};

/** A bookmaker review mutation response */
export type BookmakerReviewMutationResponse = {
  bookmaker: Maybe<Bookmaker>;
  review: Maybe<BookmakerReview>;
};

/** A sport list type */
export type CachedPrediction = {
  match: Maybe<Match>;
  agreed_votes_percent: Maybe<Scalars['Int']>;
  all_votes_count: Maybe<Scalars['Int']>;
  prediction: Maybe<Array<Maybe<Scalars['String']>>>;
  prediction_value: Maybe<Scalars['String']>;
};

/** A card */
export type Card = {
  id: Maybe<Scalars['String']>;
  team: Maybe<Scalars['String']>;
  time: Maybe<Scalars['String']>;
  color: Maybe<Scalars['String']>;
  player: Maybe<Player>;
};

/** A country */
export type Country = {
  name: Maybe<Scalars['String']>;
  name_gen_ru: Maybe<Scalars['String']>;
  iso: Maybe<Scalars['String']>;
  ioc: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  national_teams: Maybe<Array<Maybe<Team>>>;
  leagues: Maybe<Array<Maybe<League>>>;
  /** A logo */
  logo: Maybe<Scalars['String']>;
};


/** A country */
export type CountryNational_TeamsArgs = {
  sport_slug?: Maybe<Scalars['String']>;
};


/** A country */
export type CountryLeaguesArgs = {
  sport_slug?: Maybe<Scalars['String']>;
};


/** A country */
export type CountryLogoArgs = {
  preset?: Maybe<Scalars['String']>;
};

/** A coupon */
export type Coupon = {
  id: Maybe<Scalars['String']>;
  coupon_id: Maybe<Scalars['String']>;
  rate_type: Maybe<Scalars['String']>;
  rate_outcome: Maybe<Scalars['String']>;
  rate_value: Maybe<Scalars['Float']>;
  rate_current: Maybe<Scalars['Float']>;
  rate_change: Maybe<Scalars['Float']>;
  rate_result: Maybe<Scalars['String']>;
  match: Maybe<Match>;
};

/** CupBlock */
export type CupBlock = {
  order: Maybe<Scalars['Int']>;
  block_id: Maybe<Scalars['Int']>;
  finished: Maybe<Scalars['Boolean']>;
  matches_in_round: Maybe<Scalars['Int']>;
  result: Maybe<Scalars['String']>;
  block_participants: Maybe<Array<Maybe<BlockParticipant>>>;
  matches: Maybe<Array<Maybe<Match>>>;
};

/** CupRound */
export type CupRound = {
  order: Maybe<Scalars['Int']>;
  description: Maybe<Scalars['String']>;
  cup_blocks: Maybe<Array<Maybe<CupBlock>>>;
};

/** CupTree */
export type CupTree = {
  current_cup_round: Maybe<Scalars['Int']>;
  cup_rounds: Maybe<Array<Maybe<CupRound>>>;
};

/** The list of days */
export type DayEnum = 
  'today' |
  'tomorrow' |
  'aftertomorrow';

/** A device status */
export type DeviceStatus = {
  auth: Maybe<Scalars['Boolean']>;
  entities: Maybe<Array<Maybe<DeviceStatusEntity>>>;
  settings: Maybe<Array<Maybe<DeviceStatusSetting>>>;
};

/** A device status entity */
export type DeviceStatusEntity = {
  entityName: Maybe<Scalars['String']>;
  entitySportSlug: Maybe<Scalars['String']>;
  entitySlug: Maybe<Scalars['String']>;
};

/** A device status setting */
export type DeviceStatusSetting = {
  settingName: Maybe<Scalars['String']>;
  settingValue: Maybe<Scalars['String']>;
};

/** A dictionary */
export type Dictionary = {
  langs: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A favourite */
export type Favourite = {
  sport_slug: Maybe<Scalars['String']>;
  entity_type: Maybe<Scalars['String']>;
  entity_slug: Maybe<Scalars['String']>;
};

/** A feed block */
export type FeedBlock = {
  type: Maybe<Scalars['String']>;
  match: Maybe<Match>;
  team: Maybe<Team>;
  league: Maybe<League>;
  player: Maybe<Player>;
  matches: Maybe<Array<Maybe<Match>>>;
};

/** A trend card */
export type FilterMarketTrend = {
  slug: Maybe<Scalars['String']>;
  count: Maybe<Scalars['Int']>;
};

/** A filter prediction type */
export type FilterPrediction = {
  league: Maybe<Array<Maybe<League>>>;
  sport: Maybe<Array<Maybe<Sport>>>;
  day: Maybe<Array<Maybe<PredictionDayFilter>>>;
  votes: Maybe<Array<Maybe<PredictionVotesFilter>>>;
};

/** A trend card */
export type FilterTrend = {
  sports: Maybe<Array<Maybe<Scalars['String']>>>;
  days: Maybe<Array<Maybe<Scalars['String']>>>;
  league_types: Maybe<Array<Maybe<Scalars['String']>>>;
  leagues: Maybe<Array<Maybe<League>>>;
  markets: Maybe<Array<Maybe<FilterMarketTrend>>>;
  has_doubles: Maybe<Scalars['String']>;
};

/** FormStanding */
export type FormStanding = {
  team: Maybe<Team>;
  position: Maybe<Scalars['Int']>;
  matches: Maybe<Array<Maybe<Match>>>;
  season_name: Maybe<Scalars['String']>;
  season_year: Maybe<Scalars['String']>;
  league_table_id: Maybe<Scalars['String']>;
  league_table_name: Maybe<Scalars['String']>;
  league_table_round: Maybe<Scalars['String']>;
  league_table_type: Maybe<Scalars['String']>;
  position_total: Maybe<Scalars['String']>;
  sort_position_total: Maybe<Scalars['String']>;
  position_away: Maybe<Scalars['String']>;
  sort_position_away: Maybe<Scalars['String']>;
  position_home: Maybe<Scalars['String']>;
  sort_position_home: Maybe<Scalars['String']>;
  change_total: Maybe<Scalars['String']>;
  change_away: Maybe<Scalars['String']>;
  change_home: Maybe<Scalars['String']>;
  matches_total: Maybe<Scalars['String']>;
  matches_away: Maybe<Scalars['String']>;
  matches_home: Maybe<Scalars['String']>;
  win_total: Maybe<Scalars['String']>;
  win_away: Maybe<Scalars['String']>;
  win_home: Maybe<Scalars['String']>;
  draw_total: Maybe<Scalars['String']>;
  draw_away: Maybe<Scalars['String']>;
  draw_home: Maybe<Scalars['String']>;
  loss_total: Maybe<Scalars['String']>;
  loss_away: Maybe<Scalars['String']>;
  loss_home: Maybe<Scalars['String']>;
  goals_total: Maybe<Scalars['String']>;
  goals_total_away: Maybe<Scalars['String']>;
  goals_total_home: Maybe<Scalars['String']>;
  goals_for_total: Maybe<Scalars['String']>;
  goals_for_away: Maybe<Scalars['String']>;
  goals_for_home: Maybe<Scalars['String']>;
  goals_against_total: Maybe<Scalars['String']>;
  goals_against_away: Maybe<Scalars['String']>;
  goals_against_home: Maybe<Scalars['String']>;
  goal_diff_total: Maybe<Scalars['String']>;
  goal_diff_away: Maybe<Scalars['String']>;
  goal_diff_home: Maybe<Scalars['String']>;
  points_total: Maybe<Scalars['String']>;
  pct_total: Maybe<Scalars['String']>;
  points_away: Maybe<Scalars['String']>;
  points_home: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  matches_total_live: Maybe<Scalars['String']>;
  win_total_live: Maybe<Scalars['String']>;
  draw_total_live: Maybe<Scalars['String']>;
  loss_total_live: Maybe<Scalars['String']>;
  goals_for_total_live: Maybe<Scalars['String']>;
  goals_against_total_live: Maybe<Scalars['String']>;
  points_total_live: Maybe<Scalars['String']>;
  position_total_live: Maybe<Scalars['String']>;
  description_live: Maybe<Scalars['String']>;
  promotion_id: Maybe<Scalars['String']>;
  promotion_name: Maybe<Scalars['String']>;
  promotion_id_live: Maybe<Scalars['String']>;
  promotion_name_live: Maybe<Scalars['String']>;
};

/** A generatedPredictionType */
export type GeneratedPrediction = {
  text: Maybe<GeneratedText>;
  prediction: Maybe<Array<Maybe<Scalars['String']>>>;
  /** statistic */
  top_assistant: Maybe<Array<Maybe<SeasonPlayerStatisticItem>>>;
  /** statistic */
  top_scorer: Maybe<Array<Maybe<SeasonPlayerStatisticItem>>>;
  prediction_value: Maybe<Scalars['String']>;
  teams: Maybe<Array<Maybe<Team>>>;
  unique_tournament: Maybe<League>;
  match_date: Maybe<Scalars['String']>;
  created_date: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};

/** Parts Text */
export type GeneratedText = {
  /** introduction  */
  intro: Maybe<Scalars['String']>;
  /** H2H  */
  h2h: Maybe<Scalars['String']>;
  /** standing */
  standing: Maybe<Scalars['String']>;
  /** Factors */
  facts: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  /** Factors */
  serials: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  /** statistic */
  statistic: Maybe<Scalars['String']>;
  /** facts_description */
  facts_description: Maybe<Scalars['String']>;
  /** facts_description */
  teams: Maybe<Array<Maybe<Scalars['String']>>>;
  /** prediction */
  prediction: Maybe<Scalars['String']>;
  /** top_assistant */
  top_assistant: Maybe<Array<Maybe<Scalars['String']>>>;
  /** top_scorer */
  top_scorer: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A goal */
export type Goal = {
  id: Maybe<Scalars['String']>;
  team: Maybe<Scalars['String']>;
  time: Maybe<Scalars['String']>;
  home_team_score: Maybe<Scalars['String']>;
  away_team_score: Maybe<Scalars['String']>;
  shootout: Maybe<Scalars['Boolean']>;
  goal_type: Maybe<Scalars['String']>;
  player: Maybe<Player>;
  assists: Maybe<Array<Maybe<Assist>>>;
};

/** A result statistic item */
export type GoalStatistic = {
  home: Maybe<Array<Maybe<GoalStatisticItem>>>;
  away: Maybe<Array<Maybe<GoalStatisticItem>>>;
  overall: Maybe<Array<Maybe<GoalStatisticItem>>>;
};

/** A statistic item */
export type GoalStatisticItem = {
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['Float']>;
};

/** Head2Head */
export type Head2Head = {
  firstMatchYear: Maybe<Scalars['String']>;
  draws: Maybe<Scalars['Int']>;
  total: Maybe<Scalars['Int']>;
  goals: Maybe<Array<Maybe<Scalars['Int']>>>;
  wins: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** HeaderOdds */
export type HeaderOdds = {
  match_slug: Maybe<Scalars['String']>;
  bookmaker_slug: Maybe<Scalars['String']>;
  bookmaker_logo: Maybe<Scalars['String']>;
  bookmaker_color: Maybe<Scalars['String']>;
  outcome: Maybe<Scalars['String']>;
  odd: Maybe<Scalars['Float']>;
};

/** A country from league collection */
export type LCountry = {
  name: Maybe<Scalars['String']>;
  name_gen_ru: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  iso: Maybe<Scalars['String']>;
  alpha2: Maybe<Scalars['String']>;
  ioc: Maybe<Scalars['String']>;
};

/** The list of supported lang enum */
export type LangEnum = 
  'ru' |
  'en' |
  'es' |
  'it';

/** A league */
export type League = {
  name: Maybe<Scalars['String']>;
  short_name: Maybe<Scalars['String']>;
  category_name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  /** A logo */
  logo: Maybe<Scalars['String']>;
  sport_slug: Maybe<Scalars['String']>;
  country_name: Maybe<Scalars['String']>;
  country_slug: Maybe<Scalars['String']>;
  country: Maybe<Country>;
  category_slug: Maybe<Scalars['String']>;
  standings: Maybe<Array<Maybe<Standing>>>;
  fixtures: Maybe<Array<Maybe<Match>>>;
  results: Maybe<Array<Maybe<Match>>>;
  subscribers: Maybe<Array<Maybe<Subscriber>>>;
  subscribers_count: Maybe<Scalars['Int']>;
  events_count: Maybe<Scalars['Int']>;
  priority: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
  isActual: Maybe<Scalars['Boolean']>;
  description: Maybe<Scalars['String']>;
  current_season_year: Maybe<Scalars['String']>;
  current_season_start: Maybe<Scalars['String']>;
  current_season_end: Maybe<Scalars['String']>;
  has_h2h: Maybe<Scalars['Boolean']>;
  has_playoff: Maybe<Scalars['Boolean']>;
  has_standings: Maybe<Scalars['Boolean']>;
  has_top_players: Maybe<Scalars['Boolean']>;
  has_news: Maybe<Scalars['Boolean']>;
  has_statistics: Maybe<Scalars['Boolean']>;
  has_prediction: Maybe<Scalars['Boolean']>;
  linked_news: Maybe<Array<Maybe<News>>>;
  is_redirect: Maybe<Scalars['Boolean']>;
  redirect_slug: Maybe<Scalars['String']>;
  teams: Maybe<Array<Maybe<Team>>>;
  current_matches: Maybe<Array<Maybe<Match>>>;
  ext_id_l: Maybe<Scalars['String']>;
  seasons: Maybe<Array<Maybe<Season>>>;
};


/** A league */
export type LeagueLogoArgs = {
  preset?: Maybe<Scalars['String']>;
};


/** A league */
export type LeagueFixturesArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A league */
export type LeagueResultsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A league */
export type LeagueLinked_NewsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A league */
export type LeagueTeamsArgs = {
  all_seasons?: Maybe<Scalars['Boolean']>;
};


/** A league */
export type LeagueSeasonsArgs = {
  team_slug?: Maybe<Scalars['String']>;
};

/** A league list */
export type LeagueList = {
  leagues: Maybe<Array<Maybe<LeagueListItem>>>;
};

/** A league list item */
export type LeagueListItem = {
  league: Maybe<League>;
  matches: Maybe<Array<Maybe<Match>>>;
  is_open: Maybe<Scalars['Boolean']>;
};

/** A league prediction list type */
export type LeaguePredictionList = {
  league: Maybe<League>;
  count: Maybe<Scalars['Int']>;
  is_open: Maybe<Scalars['Boolean']>;
  items: Maybe<Array<Maybe<CachedPrediction>>>;
};

/** A leaguetable */
export type Leaguetable = {
  comments: Maybe<Array<Maybe<Scalars['String']>>>;
  standings: Maybe<Array<Maybe<Standing>>>;
};


/** A leaguetable */
export type LeaguetableStandingsArgs = {
  short?: Maybe<Scalars['Boolean']>;
};

/** Line */
export type Line = {
  one_x_two: Maybe<Array<Maybe<RateSimple>>>;
  one_two: Maybe<Array<Maybe<RateSimple>>>;
  one_two_inc_ot: Maybe<Array<Maybe<RateSimple>>>;
  total_over: Maybe<Array<Maybe<RateSimple>>>;
  total_under: Maybe<Array<Maybe<RateSimple>>>;
  handicap1: Maybe<Array<Maybe<RateSimple>>>;
  handicap2: Maybe<Array<Maybe<RateSimple>>>;
  double_chance: Maybe<Array<Maybe<RateSimple>>>;
  total1_over: Maybe<Array<Maybe<RateSimple>>>;
  total1_under: Maybe<Array<Maybe<RateSimple>>>;
  total2_over: Maybe<Array<Maybe<RateSimple>>>;
  total2_under: Maybe<Array<Maybe<RateSimple>>>;
  both_to_score: Maybe<Array<Maybe<RateSimple>>>;
  correct_score: Maybe<Array<Maybe<RateSimple>>>;
  ht_ft: Maybe<Array<Maybe<RateSimple>>>;
};

/** Lines */
export type Lines = {
  current: Maybe<Line>;
  parsed: Maybe<Scalars['String']>;
};

/** Lineup */
export type Lineup = {
  substitutes: Maybe<Scalars['Boolean']>;
  players: Maybe<Array<Maybe<LineupPlayer>>>;
};

/** LineupPlayer */
export type LineupPlayer = {
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  shirt_number: Maybe<Scalars['String']>;
  match_posistion: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  short_name: Maybe<Scalars['String']>;
  last_name: Maybe<Scalars['String']>;
  /** A logo */
  logo: Maybe<Scalars['String']>;
  ranking: Maybe<Scalars['Int']>;
};


/** LineupPlayer */
export type LineupPlayerLogoArgs = {
  preset?: Maybe<Scalars['String']>;
};

/** Lineups */
export type Lineups = {
  start: Maybe<Array<Maybe<LineupPlayer>>>;
  reserve: Maybe<Array<Maybe<LineupPlayer>>>;
};

/** A live text */
export type LiveText = {
  text: Maybe<Scalars['String']>;
  team: Maybe<Scalars['String']>;
  time: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

/** A match */
export type Match = {
  id: Maybe<Scalars['String']>;
  match_date: Maybe<Scalars['String']>;
  match_neutral_ground: Maybe<Scalars['Boolean']>;
  sport_name: Maybe<Scalars['String']>;
  category_name: Maybe<Scalars['String']>;
  tournament_name: Maybe<Scalars['String']>;
  unique_tournament_name: Maybe<Scalars['String']>;
  unique_tournament_description: Maybe<Scalars['String']>;
  teams: Maybe<Array<Maybe<Team>>>;
  season_name: Maybe<Scalars['String']>;
  season_start: Maybe<Scalars['String']>;
  season_end: Maybe<Scalars['String']>;
  season_year: Maybe<Scalars['String']>;
  round: Maybe<Scalars['String']>;
  referee_id: Maybe<Scalars['String']>;
  referee_name: Maybe<Scalars['String']>;
  result_postponed: Maybe<Scalars['Boolean']>;
  result_canceled: Maybe<Scalars['Boolean']>;
  result_score: Maybe<Scalars['String']>;
  result_scores: Maybe<Array<Maybe<Score>>>;
  goals: Maybe<Array<Maybe<Goal>>>;
  cards: Maybe<Array<Maybe<Card>>>;
  slug: Maybe<Scalars['String']>;
  sport_slug: Maybe<Scalars['String']>;
  league_slug: Maybe<Scalars['String']>;
  /** A logo */
  league_logo: Maybe<Scalars['String']>;
  unique_tournament: Maybe<League>;
  country: Maybe<Country>;
  category_slug: Maybe<Scalars['String']>;
  join_matches: Maybe<Array<Maybe<Match>>>;
  all_matches: Maybe<Array<Maybe<Array<Maybe<Match>>>>>;
  home_matches: Maybe<Array<Maybe<Array<Maybe<Match>>>>>;
  away_matches: Maybe<Array<Maybe<Array<Maybe<Match>>>>>;
  join_leagues: Maybe<Array<Maybe<League>>>;
  all_leagues: Maybe<Array<Maybe<Array<Maybe<League>>>>>;
  home_leagues: Maybe<Array<Maybe<Array<Maybe<League>>>>>;
  away_leagues: Maybe<Array<Maybe<Array<Maybe<League>>>>>;
  standings: Maybe<Array<Maybe<Standing>>>;
  status: Maybe<Status>;
  lines: Maybe<Lines>;
  substitutions: Maybe<Array<Maybe<SubstitutionType>>>;
  is_live: Maybe<Scalars['Boolean']>;
  is_ended: Maybe<Scalars['Boolean']>;
  is_finished: Maybe<Scalars['Boolean']>;
  live_text: Maybe<Array<Maybe<LiveText>>>;
  events_count: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['String']>;
  game_score: Maybe<Scalars['String']>;
  server: Maybe<Scalars['Int']>;
  tiebreak: Maybe<Scalars['Boolean']>;
  scores_dynamics: Maybe<Array<Maybe<Array<Maybe<Scalars['Int']>>>>>;
  venue: Maybe<Venue>;
  tournament: Maybe<Tournament>;
  winner: Maybe<Scalars['Int']>;
  aggregated_winner: Maybe<Scalars['Int']>;
  br_id: Maybe<Scalars['Int']>;
  isTop: Maybe<Scalars['Boolean']>;
  is_redirect: Maybe<Scalars['Boolean']>;
  redirect_slug: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  missing_players: Maybe<Array<Maybe<Array<Maybe<Player>>>>>;
  prev_match_result: Maybe<Scalars['String']>;
  prev_match: Maybe<Match>;
  statistic: Maybe<MatchStatistic>;
  fun_facts: Maybe<Array<Maybe<Scalars['String']>>>;
  video: Maybe<Array<Maybe<Scalars['String']>>>;
  has_squads: Maybe<Scalars['Boolean']>;
  has_standings: Maybe<Scalars['Boolean']>;
  has_h2h: Maybe<Scalars['Boolean']>;
  has_new_h2h: Maybe<Scalars['Boolean']>;
  has_odds: Maybe<Scalars['Boolean']>;
  has_statistic: Maybe<Scalars['Boolean']>;
  has_playoff: Maybe<Scalars['Boolean']>;
  has_news: Maybe<Scalars['Boolean']>;
  has_prediction: Maybe<Scalars['Boolean']>;
  has_lang_prediction: Maybe<Array<Maybe<MultiLangBool>>>;
  linked_news: Maybe<Array<Maybe<News>>>;
  predictions_count: Maybe<Scalars['Int']>;
  top_predictions: Maybe<Array<Maybe<PredictionStat>>>;
  team_statistics_for_season: Maybe<Array<Maybe<Statistic>>>;
  bkm_urls: Maybe<Array<Maybe<BkmUrl>>>;
  broadcast_url: Maybe<BkmUrl>;
  generated_prediction: Maybe<GeneratedPrediction>;
  ext_id_l: Maybe<Scalars['String']>;
  number_of_games: Maybe<Scalars['Int']>;
  /** микроразметка для старой версии фронта */
  micro: Maybe<Scalars['String']>;
  /** микроразметка для обновления фронта */
  micro_enum: Maybe<Scalars['String']>;
};


/** A match */
export type MatchLeague_LogoArgs = {
  preset?: Maybe<Scalars['String']>;
};


/** A match */
export type MatchHas_PredictionArgs = {
  project?: Maybe<ProjectEnum>;
};


/** A match */
export type MatchHas_Lang_PredictionArgs = {
  lang_keys?: Maybe<Array<Maybe<LangEnum>>>;
  project?: Maybe<ProjectEnum>;
};


/** A match */
export type MatchLinked_NewsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A match */
export type MatchTop_PredictionsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A match */
export type MatchTeam_Statistics_For_SeasonArgs = {
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A match */
export type MatchGenerated_PredictionArgs = {
  project?: Maybe<ProjectEnum>;
};


/** A match */
export type MatchMicroArgs = {
  page?: Maybe<Scalars['String']>;
};


/** A match */
export type MatchMicro_EnumArgs = {
  page?: Maybe<MatchMicroDataEnum>;
};

export type MatchHyperText = {
  review: Maybe<Scalars['String']>;
  h2h: Maybe<Scalars['String']>;
  odds: Maybe<Scalars['String']>;
};

/** The list of supported match microdata type enum */
export type MatchMicroDataEnum = 
  'leagueList' |
  'h2h' |
  'prediction' |
  'review' |
  'matchLeagueList';

export type MatchRateOdds = {
  bookmaker: Maybe<Bookmaker>;
  markup: Maybe<Scalars['String']>;
  outcome: Maybe<Scalars['String']>;
  values: Maybe<Array<Maybe<MatchRateOddsValues>>>;
};

export type MatchRateOddsValues = {
  outcome: Maybe<Scalars['String']>;
  value: Maybe<Scalars['Float']>;
  isTop: Maybe<Scalars['Boolean']>;
};

/** MatchStatistic */
export type MatchStatistic = {
  /** @deprecated(reason: "новая структура статистики") */
  t1: Maybe<MatchStatistics>;
  /** @deprecated(reason: "новая структура статистики") */
  t2: Maybe<MatchStatistics>;
  /** @deprecated(reason: "новая структура статистики") */
  all: Maybe<MatchStatistics>;
  periods: Maybe<Array<Maybe<MatchStatisticPeriod>>>;
};

/** MatchStatisticGroup */
export type MatchStatisticGroup = {
  type: Maybe<Scalars['String']>;
  items: Maybe<Array<Maybe<MatchStatisticItem>>>;
};

/** MatchStatisticItem */
export type MatchStatisticItem = {
  type: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  team1_value: Maybe<Scalars['String']>;
  team1_percent: Maybe<Scalars['String']>;
  team1_total: Maybe<Scalars['String']>;
  team2_value: Maybe<Scalars['String']>;
  team2_percent: Maybe<Scalars['String']>;
  team2_total: Maybe<Scalars['String']>;
};

/** MatchStatisticPeriod */
export type MatchStatisticPeriod = {
  type: Maybe<Scalars['String']>;
  groups: Maybe<Array<Maybe<MatchStatisticGroup>>>;
};

/** MatchStatistics */
export type MatchStatistics = {
  /** @deprecated(reason: "новая структура статистики") */
  ball_possession: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  corners: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  fouls: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  free_kicks: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  goalkeeper_kicks: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  goalkeeper_saves: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  offsides: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  shots_off_goal: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  shots_on_goal: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  throw_ins: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  shots_blocked: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  shots_inside_box: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  shots_outside_box: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  passes_total: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  passes_accurate: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  passes_pct: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  red_cards: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  yellow_cards: Maybe<Scalars['Int']>;
  /** @deprecated(reason: "новая структура статистики") */
  shots_total: Maybe<Scalars['Int']>;
};

/** The list of supported match status enum */
export type MatchStatusEnum = 
  'upcoming' |
  'past' |
  'live';

export type MatchTopOdds = {
  market: Maybe<Scalars['String']>;
  count: Maybe<Scalars['String']>;
  isOpen: Maybe<Scalars['Boolean']>;
  topRates: Maybe<Array<Maybe<TopRates>>>;
};

/** A match statistic item */
export type MatchesStatistic = {
  home: Maybe<Array<Maybe<Match>>>;
  away: Maybe<Array<Maybe<Match>>>;
  overall: Maybe<Array<Maybe<Match>>>;
};

/** The list of supported meeting type enum */
export type MeetingTypeEnum = 
  'join' |
  'join_strict' |
  'home' |
  'away';

/** Meta */
export type Meta = {
  content: Maybe<Scalars['String']>;
};

/** A players movement */
export type Movement = {
  name: Maybe<Scalars['String']>;
  team: Maybe<Team>;
};

/** A bool item by lang */
export type MultiLangBool = {
  lang: Maybe<LangEnum>;
  value: Maybe<Scalars['Boolean']>;
};

/** A names item */
export type MultiLangString = {
  lang: Maybe<LangEnum>;
  value: Maybe<Scalars['String']>;
};

export type Mutation = {
  /** Actions counter with modal window */
  addActionsCounter: Maybe<ActionsCounterType>;
  /** add bookmaker like */
  addBookmakerLike: Maybe<Bookmaker>;
  /** add bookmaker review */
  addBookmakerReview: Maybe<BookmakerReviewMutationResponse>;
  /** add bookmaker review agree */
  addBookmakerReviewAgree: Maybe<BookmakerReviewMutationResponse>;
  /** add bookmaker review comment */
  addBookmakerReviewComment: Maybe<BookmakerReviewCommentMutationResponse>;
  /** add polling vote */
  addPollingVote: Maybe<PredictionPolling>;
  /** delete bookmaker review agree */
  deleteBookmakerReviewAgree: Maybe<BookmakerReviewMutationResponse>;
  /** remove polling vote */
  removePollingVote: Maybe<PredictionPolling>;
  /** vote against bookmaker promotion */
  voteAgainstBookmakerPromotion: Maybe<BookmakerPromotion>;
  /** vote for bookmaker promotion */
  voteForBookmakerPromotion: Maybe<BookmakerPromotion>;
  /** A mutation */
  addPredictionComment: Maybe<PredictionComment>;
  /** A mutation */
  addLikePredictionComment: Maybe<PredictionComment>;
};


export type MutationAddActionsCounterArgs = {
  referrer?: Maybe<Scalars['String']>;
  type?: Maybe<ActionsCounterEnum>;
};


export type MutationAddBookmakerLikeArgs = {
  anon_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type MutationAddBookmakerReviewArgs = {
  anon_name?: Maybe<Scalars['String']>;
  recaptcha_key?: Maybe<Scalars['String']>;
  bookmaker_id?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type MutationAddBookmakerReviewAgreeArgs = {
  anon_name?: Maybe<Scalars['String']>;
  review_id?: Maybe<Scalars['String']>;
};


export type MutationAddBookmakerReviewCommentArgs = {
  anon_name?: Maybe<Scalars['String']>;
  recaptcha_key?: Maybe<Scalars['String']>;
  review_id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type MutationAddPollingVoteArgs = {
  anon_name?: Maybe<Scalars['String']>;
  match_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  vote?: Maybe<VoteEnum>;
};


export type MutationDeleteBookmakerReviewAgreeArgs = {
  anon_name?: Maybe<Scalars['String']>;
  review_id?: Maybe<Scalars['String']>;
};


export type MutationRemovePollingVoteArgs = {
  anon_name?: Maybe<Scalars['String']>;
  match_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
};


export type MutationVoteAgainstBookmakerPromotionArgs = {
  anon_name?: Maybe<Scalars['String']>;
  promotion_id?: Maybe<Scalars['String']>;
};


export type MutationVoteForBookmakerPromotionArgs = {
  anon_name?: Maybe<Scalars['String']>;
  promotion_id?: Maybe<Scalars['String']>;
};


export type MutationAddPredictionCommentArgs = {
  match_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type MutationAddLikePredictionCommentArgs = {
  comment_id?: Maybe<Scalars['String']>;
  vote_type?: Maybe<Scalars['String']>;
};

/** A news */
export type News = {
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  sport_slug: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  source: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  image_base64: Maybe<Scalars['String']>;
  /** @deprecated Deprecated due to address field split */
  image_small: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  content_preview: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  contentText: Maybe<Scalars['String']>;
  lang: Maybe<Scalars['String']>;
  teams: Maybe<Array<Maybe<Team>>>;
  players: Maybe<Array<Maybe<Player>>>;
  leagues: Maybe<Array<Maybe<League>>>;
  matches: Maybe<Array<Maybe<Match>>>;
  votes_for: Maybe<Scalars['Int']>;
  votes_against: Maybe<Scalars['Int']>;
  group_news: Maybe<Array<Maybe<News>>>;
};


/** A news */
export type NewsGroup_NewsArgs = {
  limit?: Maybe<Scalars['Int']>;
};

/** A one statistic */
export type OneStaticsRecord = {
  /** average  */
  avg: Maybe<ValueNameStatic>;
  /** sum  */
  sum: Maybe<ValueNameStatic>;
  /** type */
  type: Maybe<Scalars['String']>;
};

/** A page */
export type Page = {
  title: Maybe<Scalars['String']>;
  meta_description: Maybe<Scalars['String']>;
  meta_keywords: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
};

/** A page meta */
export type PageMeta = {
  url: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  seoText: Maybe<Scalars['String']>;
  h1: Maybe<Scalars['String']>;
  metaTemplate: Maybe<Meta>;
};

/** A parsedNews */
export type ParsedNews = {
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  source: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  contentText: Maybe<Scalars['String']>;
};

/** PlayOff */
export type PlayOff = {
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  cup_tree: Maybe<CupTree>;
};

/** PlayOffListItem */
export type PlayOffListItem = {
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

/** A player */
export type Player = {
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  short_name: Maybe<Scalars['String']>;
  team_id: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  shirt_number: Maybe<Scalars['String']>;
  position: Maybe<Scalars['String']>;
  weight: Maybe<Scalars['String']>;
  height: Maybe<Scalars['String']>;
  date_of_birth: Maybe<Scalars['String']>;
  nationality: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  last_name: Maybe<Scalars['String']>;
  preferred_foot: Maybe<Scalars['String']>;
  team: Maybe<Team>;
  national_team: Maybe<Team>;
  transfers: Maybe<Array<Maybe<Transfer>>>;
  /** A logo */
  logo: Maybe<Scalars['String']>;
  total_matches: Maybe<Scalars['Int']>;
  starting_matches: Maybe<Scalars['Int']>;
  substitutions_in: Maybe<Scalars['Int']>;
  substitutions_out: Maybe<Scalars['Int']>;
  minutes_played: Maybe<Scalars['Int']>;
  assists_for_team: Maybe<Scalars['Int']>;
  assists_in_tournament: Maybe<Scalars['Int']>;
  assists_team_ranking: Maybe<Scalars['Int']>;
  assists_tournament_ranking: Maybe<Scalars['Int']>;
  matches_played_for_team: Maybe<Scalars['Int']>;
  matches_played_in_tournament: Maybe<Scalars['Int']>;
  goals_for_team: Maybe<Scalars['Int']>;
  goals_team_ranking: Maybe<Scalars['Int']>;
  goal_average: Maybe<Scalars['Float']>;
  goal_frequency_ranking: Maybe<Scalars['Int']>;
  yellow_cards_for_team: Maybe<Scalars['Int']>;
  yellow_cards_in_tournament: Maybe<Scalars['Int']>;
  yellow_cards_team_ranking: Maybe<Scalars['Int']>;
  yellow_cards_tournament_ranking: Maybe<Scalars['Int']>;
  goals_in_tournament: Maybe<Scalars['Int']>;
  goals_tournament_ranking: Maybe<Scalars['Int']>;
  own_goals_for_team: Maybe<Scalars['Int']>;
  own_goals_in_tournament: Maybe<Scalars['Int']>;
  own_goals_team_ranking: Maybe<Scalars['Int']>;
  own_goals_tournament_ranking: Maybe<Scalars['Int']>;
  second_yellow_cards_for_team: Maybe<Scalars['Int']>;
  second_yellow_cards_in_tournament: Maybe<Scalars['Int']>;
  second_yellow_cards_team_ranking: Maybe<Scalars['Int']>;
  second_yellow_cards_tournament_ranking: Maybe<Scalars['Int']>;
  red_cards_for_team: Maybe<Scalars['Int']>;
  red_cards_in_tournament: Maybe<Scalars['Int']>;
  red_cards_team_ranking: Maybe<Scalars['Int']>;
  red_cards_tournament_ranking: Maybe<Scalars['Int']>;
  statistics: Maybe<PlayerStatistic>;
  country: Maybe<Country>;
  gender: Maybe<Scalars['String']>;
  turned_pro: Maybe<Scalars['String']>;
  plays: Maybe<Scalars['String']>;
  ranking: Maybe<Scalars['String']>;
  winner_stats: Maybe<Array<Maybe<Scalars['String']>>>;
  player_status: Maybe<PlayerStatus>;
  description: Maybe<Scalars['String']>;
  sport_slug: Maybe<Scalars['String']>;
  has_news: Maybe<Scalars['Boolean']>;
  linked_news: Maybe<Array<Maybe<News>>>;
  is_redirect: Maybe<Scalars['Boolean']>;
  redirect_slug: Maybe<Scalars['String']>;
};


/** A player */
export type PlayerLogoArgs = {
  preset?: Maybe<Scalars['String']>;
};


/** A player */
export type PlayerLinked_NewsArgs = {
  limit?: Maybe<Scalars['Int']>;
};

/** A player statistic */
export type PlayerSidelinedItems = {
  type: Maybe<Scalars['String']>;
  date_start: Maybe<Scalars['String']>;
  date_end: Maybe<Scalars['String']>;
};

/** A player statistic */
export type PlayerStatistic = {
  statistic_cups_clubs: Maybe<Array<Maybe<PlayerStatisticCupsClubs>>>;
  statistic_clubs: Maybe<Array<Maybe<PlayerStatisticClubs>>>;
  statistic_cups_intl_clubs: Maybe<Array<Maybe<PlayerStatisticCupsIntlClubs>>>;
  statistic_intl_clubs: Maybe<Array<Maybe<PlayerStatisticIntlClubs>>>;
  trophies: Maybe<Array<Maybe<PlayerTrophies>>>;
  transfers: Maybe<Array<Maybe<PlayerTransfers>>>;
  sidelined_items: Maybe<Array<Maybe<PlayerSidelinedItems>>>;
};

/** A player statistic */
export type PlayerStatisticClubs = {
  name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  league: Maybe<Scalars['String']>;
  league_id: Maybe<Scalars['String']>;
  season: Maybe<Scalars['String']>;
  minutes: Maybe<Scalars['Int']>;
  appearences: Maybe<Scalars['Int']>;
  lineups: Maybe<Scalars['Int']>;
  substitute_in: Maybe<Scalars['Int']>;
  substitute_out: Maybe<Scalars['Int']>;
  substitutes_on_bench: Maybe<Scalars['Int']>;
  goals: Maybe<Scalars['Int']>;
  yellowcards: Maybe<Scalars['Int']>;
  yellowred: Maybe<Scalars['Int']>;
  redcards: Maybe<Scalars['Int']>;
  team: Maybe<Team>;
  unique_tournament: Maybe<League>;
};

/** A player statistic cups clubs */
export type PlayerStatisticCupsClubs = {
  name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  league: Maybe<Scalars['String']>;
  league_id: Maybe<Scalars['String']>;
  season: Maybe<Scalars['String']>;
  minutes: Maybe<Scalars['Int']>;
  appearences: Maybe<Scalars['Int']>;
  lineups: Maybe<Scalars['Int']>;
  substitute_in: Maybe<Scalars['Int']>;
  substitute_out: Maybe<Scalars['Int']>;
  substitutes_on_bench: Maybe<Scalars['Int']>;
  goals: Maybe<Scalars['Int']>;
  yellowcards: Maybe<Scalars['Int']>;
  yellowred: Maybe<Scalars['Int']>;
  redcards: Maybe<Scalars['Int']>;
  team: Maybe<Team>;
  unique_tournament: Maybe<League>;
};

/** A player statistic */
export type PlayerStatisticCupsIntlClubs = {
  name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  league: Maybe<Scalars['String']>;
  league_id: Maybe<Scalars['String']>;
  season: Maybe<Scalars['String']>;
  minutes: Maybe<Scalars['Int']>;
  appearences: Maybe<Scalars['Int']>;
  lineups: Maybe<Scalars['Int']>;
  substitute_in: Maybe<Scalars['Int']>;
  substitute_out: Maybe<Scalars['Int']>;
  substitutes_on_bench: Maybe<Scalars['Int']>;
  goals: Maybe<Scalars['Int']>;
  yellowcards: Maybe<Scalars['Int']>;
  yellowred: Maybe<Scalars['Int']>;
  redcards: Maybe<Scalars['Int']>;
  team: Maybe<Team>;
  unique_tournament: Maybe<League>;
};

/** A player statistic */
export type PlayerStatisticIntlClubs = {
  name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  league: Maybe<Scalars['String']>;
  league_id: Maybe<Scalars['String']>;
  season: Maybe<Scalars['String']>;
  minutes: Maybe<Scalars['Int']>;
  appearences: Maybe<Scalars['Int']>;
  lineups: Maybe<Scalars['Int']>;
  substitute_in: Maybe<Scalars['Int']>;
  substitute_out: Maybe<Scalars['Int']>;
  substitutes_on_bench: Maybe<Scalars['Int']>;
  goals: Maybe<Scalars['Int']>;
  yellowcards: Maybe<Scalars['Int']>;
  yellowred: Maybe<Scalars['Int']>;
  redcards: Maybe<Scalars['Int']>;
  team: Maybe<Team>;
  unique_tournament: Maybe<League>;
};

/** A PlayerStatus */
export type PlayerStatus = {
  registered: Maybe<Scalars['String']>;
  reason_id: Maybe<Scalars['String']>;
  reason_name: Maybe<Scalars['String']>;
  reason_global: Maybe<Scalars['Boolean']>;
  status_type: Maybe<Scalars['String']>;
};

/** A player statistic */
export type PlayerTransfers = {
  date: Maybe<Scalars['String']>;
  from: Maybe<Scalars['String']>;
  from_id: Maybe<Scalars['String']>;
  to: Maybe<Scalars['String']>;
  to_id: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  team_from: Maybe<Team>;
  team_to: Maybe<Team>;
};

/** A player statistic */
export type PlayerTrophies = {
  country: Maybe<Scalars['String']>;
  league: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  count: Maybe<Scalars['Int']>;
  seasons: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  surface: Maybe<Scalars['String']>;
  prize: Maybe<Scalars['String']>;
  unique_tournament: Maybe<League>;
};

/** A Prediction */
export type Prediction = {
  predictor: Maybe<Predictor>;
  match: Maybe<Match>;
  type: Maybe<Scalars['String']>;
  rate: Maybe<Scalars['String']>;
  amount: Maybe<Scalars['String']>;
  comment: Maybe<Scalars['String']>;
  video: Maybe<Scalars['String']>;
  bookmakers: Maybe<RateSimple>;
  outcome: Maybe<Scalars['String']>;
};

/** A type */
export type PredictionComment = {
  _id: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  user_name: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['String']>;
  match_slug: Maybe<Scalars['String']>;
  sport_slug: Maybe<Scalars['String']>;
  lang: Maybe<Scalars['String']>;
  like: Maybe<Scalars['Int']>;
  dislike: Maybe<Scalars['Int']>;
  avatar: Maybe<Scalars['String']>;
  self_check: Maybe<Scalars['String']>;
};

/** A filter day prediction type */
export type PredictionDayFilter = {
  day: Maybe<Scalars['String']>;
  count: Maybe<Scalars['Int']>;
};

/** голосование по прогнозу */
export type PredictionPolling = {
  /** id */
  _id: Maybe<Scalars['String']>;
  /** голоса по прогнозу */
  votes: Maybe<PredictionPollingVotes>;
};

/** A polling votes */
export type PredictionPollingVotes = {
  /** голоса за */
  y: Maybe<Scalars['Int']>;
  /** голоса против */
  n: Maybe<Scalars['Int']>;
  /** голос пользователя */
  self_pick: Maybe<UserVoteEnum>;
};

/** A PredictionStat */
export type PredictionStat = {
  type: Maybe<Scalars['String']>;
  outcome: Maybe<Scalars['String']>;
  count: Maybe<Scalars['Int']>;
};

/** A filter votes prediction type */
export type PredictionVotesFilter = {
  slug: Maybe<Scalars['String']>;
  count: Maybe<Scalars['Int']>;
};

/** The list of days */
export type PredictionVotesTypeEnum = 
  'popular' |
  'people';

/** A predictor */
export type Predictor = {
  /** Predictions */
  predictions: Maybe<Array<Maybe<Prediction>>>;
  /** Predictor's name */
  name: Maybe<Scalars['String']>;
  /** Predictor's type */
  type: Maybe<Scalars['String']>;
  /** Predictor's id */
  id: Maybe<Scalars['String']>;
  /** Predictor's id */
  stats: Maybe<PredictorStatistics>;
};


/** A predictor */
export type PredictorPredictionsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A predictor */
export type PredictorStatsArgs = {
  type?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
};

/** A predictor statistics */
export type PredictorStatistics = {
  amountSum: Maybe<Scalars['String']>;
  count: Maybe<Scalars['String']>;
  initialSum: Maybe<Scalars['String']>;
  lose: Maybe<Scalars['String']>;
  maxSagPercent: Maybe<Scalars['String']>;
  minResult: Maybe<Scalars['String']>;
  result: Maybe<Scalars['String']>;
  resultPercent: Maybe<Scalars['String']>;
  return: Maybe<Scalars['String']>;
  roiPercent: Maybe<Scalars['String']>;
  won: Maybe<Scalars['String']>;
};

/** The list of projects */
export type ProjectEnum = 
  'scores24' |
  'bookmaker_24' |
  'bet_rate' |
  'bookmaker_mobile';

export type Query = {
  Article: Maybe<Array<Maybe<Article>>>;
  Banner: Maybe<Array<Maybe<Banner>>>;
  BetCalc: Maybe<BetCalc>;
  Bookmaker: Maybe<Array<Maybe<Bookmaker>>>;
  BookmakerOddsWidget: Maybe<Array<Maybe<Bookmaker>>>;
  BookmakerPromotion: Maybe<Array<Maybe<BookmakerPromotion>>>;
  BookmakerPromotionCategory: Maybe<Array<Maybe<BookmakerPromotionCategory>>>;
  BookmakerRating: Maybe<Array<Maybe<BookmakerRating>>>;
  Country: Maybe<Array<Maybe<Country>>>;
  Coupon: Maybe<Array<Maybe<Coupon>>>;
  DeviceStatus: Maybe<DeviceStatus>;
  Dictionary: Maybe<Dictionary>;
  Favourite: Maybe<Array<Maybe<Favourite>>>;
  Feed: Maybe<Array<Maybe<FeedBlock>>>;
  FilterPrediction: Maybe<FilterPrediction>;
  FormStanding: Maybe<Array<Maybe<Array<Maybe<FormStanding>>>>>;
  GeneratedPrediction: Maybe<GeneratedPrediction>;
  GeneratedPredictions: Maybe<Array<Maybe<GeneratedPrediction>>>;
  Head2Head: Maybe<Head2Head>;
  LCountry: Maybe<Array<Maybe<LCountry>>>;
  League: Maybe<Array<Maybe<League>>>;
  LeagueList: Maybe<LeagueList>;
  LeagueStatistic: Maybe<Statistic>;
  LeaguesPrediction: Maybe<Array<Maybe<LeaguePredictionList>>>;
  Leaguetable: Maybe<Array<Maybe<Leaguetable>>>;
  LiveOdds: Maybe<Lines>;
  Match: Maybe<Array<Maybe<Match>>>;
  MatchBroadcastUrl: Maybe<BkmUrl>;
  MatchHeaderOdds: Maybe<Array<Maybe<HeaderOdds>>>;
  /** Generated texts for tabs on the match page */
  MatchHyperText: Maybe<MatchHyperText>;
  MatchList: Maybe<Array<Maybe<Match>>>;
  MatchRateOdds: Maybe<Array<Maybe<MatchRateOdds>>>;
  MatchTopOdds: Maybe<Array<Maybe<MatchTopOdds>>>;
  Meta: Maybe<Meta>;
  News: Maybe<Array<Maybe<News>>>;
  Page: Maybe<Page>;
  PageMeta: Maybe<PageMeta>;
  ParsedNews: Maybe<Array<Maybe<ParsedNews>>>;
  PlayOff: Maybe<PlayOff>;
  PlayOffList: Maybe<Array<Maybe<PlayOffListItem>>>;
  Player: Maybe<Array<Maybe<Player>>>;
  PopupWidget: Maybe<Widget>;
  Prediction: Maybe<Array<Maybe<Prediction>>>;
  PredictionPolling: Maybe<PredictionPolling>;
  Predictor: Maybe<Array<Maybe<Predictor>>>;
  Ranking: Maybe<Array<Maybe<Ranking>>>;
  Search: Maybe<SearchResult>;
  SearchString: Maybe<SearchStringResult>;
  SeasonPlayerStatistic: Maybe<Array<Maybe<SeasonPlayerStatistic>>>;
  ServerStatus: Maybe<ServerStatus>;
  Slider: Maybe<Array<Maybe<Match>>>;
  Sport: Maybe<Array<Maybe<Sport>>>;
  SportPrediction: Maybe<Array<Maybe<SportPredictionList>>>;
  Standing: Maybe<Array<Maybe<Standing>>>;
  Team: Maybe<Array<Maybe<Team>>>;
  TeamLeagues: Maybe<Array<Maybe<League>>>;
  TeamMatches: Maybe<Array<Maybe<Match>>>;
  TeamStatistic: Maybe<Statistic>;
  TopMatches: Maybe<Array<Maybe<Match>>>;
  Trend: Maybe<Trend>;
  User: Maybe<User>;
  UserStatus: Maybe<UserStatus>;
  Vote: Maybe<Array<Maybe<Vote>>>;
  /** A query */
  PredictionComment: Maybe<Array<Maybe<PredictionComment>>>;
  Test: Maybe<Test>;
  /** A query */
  TournamentPrediction: Maybe<TournamentPredictionList>;
};


export type QueryArticleArgs = {
  sport_slug?: Maybe<Scalars['String']>;
  team_slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  league_slug?: Maybe<Scalars['String']>;
  match_slug?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryBannerArgs = {
  sport_slug: Scalars['String'];
  type: Scalars['String'];
  lang?: Maybe<Scalars['String']>;
};


export type QueryBetCalcArgs = {
  match_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryBookmakerArgs = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryBookmakerPromotionArgs = {
  lang?: Maybe<Scalars['String']>;
  promoted?: Maybe<Scalars['Boolean']>;
  category_slug?: Maybe<Scalars['String']>;
  bookmaker_slug?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryBookmakerPromotionCategoryArgs = {
  lang?: Maybe<Scalars['String']>;
  all?: Maybe<Scalars['Boolean']>;
};


export type QueryBookmakerRatingArgs = {
  lang?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryCountryArgs = {
  slug?: Maybe<Scalars['String']>;
  iso?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryCouponArgs = {
  token?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryDeviceStatusArgs = {
  deviceId: Scalars['String'];
  deviceType: Scalars['String'];
};


export type QueryFavouriteArgs = {
  token?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryFeedArgs = {
  lang?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFilterPredictionArgs = {
  sport_slug?: Maybe<Scalars['String']>;
  timezone_offset?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryFormStandingArgs = {
  league_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  season_year?: Maybe<Scalars['String']>;
  match_slug?: Maybe<Scalars['String']>;
  short?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryGeneratedPredictionArgs = {
  match_slug?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryGeneratedPredictionsArgs = {
  match_slug?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  custom?: Maybe<Scalars['Boolean']>;
};


export type QueryHead2HeadArgs = {
  team_slugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  match_slug?: Maybe<Scalars['String']>;
};


export type QueryLCountryArgs = {
  sport_slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryLeagueArgs = {
  slug?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sport_slug?: Maybe<Scalars['String']>;
  category_slug?: Maybe<Scalars['String']>;
  country_slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  isActual?: Maybe<Scalars['Boolean']>;
};


export type QueryLeagueListArgs = {
  lang?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  is_live?: Maybe<Scalars['Boolean']>;
  with_live?: Maybe<Scalars['Boolean']>;
  datebetween?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryLeagueStatisticArgs = {
  slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  lang?: Maybe<Scalars['String']>;
  year_slug?: Maybe<Scalars['String']>;
};


export type QueryLeaguesPredictionArgs = {
  day?: Maybe<DayEnum>;
  sport_slug?: Maybe<Scalars['String']>;
  votes_type?: Maybe<PredictionVotesTypeEnum>;
  league_slug?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  timezone_offset?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
  order_by?: Maybe<Scalars['String']>;
  order_type?: Maybe<Scalars['String']>;
};


export type QueryLeaguetableArgs = {
  league_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  season_year?: Maybe<Scalars['String']>;
  match_slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  short?: Maybe<Scalars['Boolean']>;
};


export type QueryLiveOddsArgs = {
  match_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
};


export type QueryMatchArgs = {
  slug?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sport_slug?: Maybe<Scalars['String']>;
  category_slug?: Maybe<Scalars['String']>;
  league_slug?: Maybe<Scalars['String']>;
  league_slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  match_status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  favorites?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderby?: Maybe<Array<Maybe<Scalars['String']>>>;
  datebetween?: Maybe<Array<Maybe<Scalars['String']>>>;
  league_priority?: Maybe<Scalars['Int']>;
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
  meeting_type?: Maybe<Scalars['String']>;
  current_round?: Maybe<Scalars['Boolean']>;
  br_id?: Maybe<Scalars['Int']>;
  ext_id_l?: Maybe<Array<Maybe<Scalars['String']>>>;
  isTop?: Maybe<Scalars['Boolean']>;
  is_top?: Maybe<Scalars['Boolean']>;
  has_prediction?: Maybe<Scalars['Boolean']>;
  project?: Maybe<ProjectEnum>;
};


export type QueryMatchBroadcastUrlArgs = {
  bookmaker_slug?: Maybe<Scalars['String']>;
  match_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
};


export type QueryMatchHeaderOddsArgs = {
  match_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
};


export type QueryMatchHyperTextArgs = {
  slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
};


export type QueryMatchListArgs = {
  slug?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sport_slug?: Maybe<Scalars['String']>;
  category_slug?: Maybe<Scalars['String']>;
  league_slug?: Maybe<Scalars['String']>;
  league_slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  match_status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  favorites?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderby?: Maybe<Array<Maybe<Scalars['String']>>>;
  datebetween?: Maybe<Array<Maybe<Scalars['String']>>>;
  league_priority?: Maybe<Scalars['Int']>;
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
  meeting_type?: Maybe<Scalars['String']>;
  current_round?: Maybe<Scalars['Boolean']>;
  br_id?: Maybe<Scalars['Int']>;
  ext_id_l?: Maybe<Array<Maybe<Scalars['String']>>>;
  isTop?: Maybe<Scalars['Boolean']>;
  is_top?: Maybe<Scalars['Boolean']>;
  has_prediction?: Maybe<Scalars['Boolean']>;
  project?: Maybe<ProjectEnum>;
  season_year?: Maybe<Scalars['String']>;
};


export type QueryMatchRateOddsArgs = {
  lang?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  rate_slug?: Maybe<Scalars['String']>;
};


export type QueryMatchTopOddsArgs = {
  lang?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
};


export type QueryMetaArgs = {
  lang?: Maybe<LangEnum>;
  page?: Maybe<Scalars['String']>;
};


export type QueryNewsArgs = {
  sport_slug?: Maybe<Scalars['String']>;
  team_slug?: Maybe<Scalars['String']>;
  league_slug?: Maybe<Scalars['String']>;
  player_slug?: Maybe<Scalars['String']>;
  match_slug?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryPageArgs = {
  slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryPageMetaArgs = {
  url?: Maybe<Scalars['String']>;
  lang?: Maybe<LangEnum>;
  page?: Maybe<Scalars['String']>;
};


export type QueryParsedNewsArgs = {
  sport_slug?: Maybe<Scalars['String']>;
  team_slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  league_slug?: Maybe<Scalars['String']>;
  match_slug?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryPlayOffArgs = {
  unique_tournament_slug?: Maybe<Scalars['String']>;
  league_slug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  match_slug?: Maybe<Scalars['String']>;
  short?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  season_year?: Maybe<Scalars['String']>;
};


export type QueryPlayOffListArgs = {
  unique_tournament_slug?: Maybe<Scalars['String']>;
  league_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  match_slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  season_year?: Maybe<Scalars['String']>;
};


export type QueryPlayerArgs = {
  slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type QueryPopupWidgetArgs = {
  sport_slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryPredictionArgs = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['String']>;
  user_level?: Maybe<Scalars['String']>;
  rand_top_expert?: Maybe<Scalars['Boolean']>;
};


export type QueryPredictionPollingArgs = {
  match_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
};


export type QueryPredictorArgs = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['String']>;
  user_level?: Maybe<Scalars['String']>;
  rand?: Maybe<Scalars['Boolean']>;
};


export type QueryRankingArgs = {
  category?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type QuerySearchArgs = {
  type?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySearchStringArgs = {
  type?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySeasonPlayerStatisticArgs = {
  league_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  season_year?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySliderArgs = {
  sport_slug: Scalars['String'];
  lang?: Maybe<Scalars['String']>;
};


export type QuerySportArgs = {
  slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type QuerySportPredictionArgs = {
  sport_slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  day?: Maybe<DayEnum>;
  votes_type?: Maybe<PredictionVotesTypeEnum>;
  league_slug?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  timezone_offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
  order_by?: Maybe<Scalars['String']>;
  order_type?: Maybe<Scalars['String']>;
};


export type QueryStandingArgs = {
  league_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  season_year?: Maybe<Scalars['String']>;
  match_slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  short?: Maybe<Scalars['Boolean']>;
};


export type QueryTeamArgs = {
  slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryTeamLeaguesArgs = {
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
  match_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  meeting_type?: Maybe<MeetingTypeEnum>;
  limit?: Maybe<Scalars['Int']>;
  match_status?: Maybe<MatchStatusEnum>;
  lang?: Maybe<LangEnum>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTeamMatchesArgs = {
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
  match_slug?: Maybe<Scalars['String']>;
  meeting_type?: Maybe<MeetingTypeEnum>;
  league_slug?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  match_status?: Maybe<MatchStatusEnum>;
  sport_slug?: Maybe<Scalars['String']>;
  lang?: Maybe<LangEnum>;
  team_type?: Maybe<TeamTypeEnum>;
};


export type QueryTeamStatisticArgs = {
  team_slug?: Maybe<Scalars['String']>;
  league_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  lang?: Maybe<Scalars['String']>;
  year_slug?: Maybe<Scalars['String']>;
  team_against_slug?: Maybe<Scalars['String']>;
  type_stats?: Maybe<Scalars['String']>;
};


export type QueryTopMatchesArgs = {
  sport_slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderby?: Maybe<Array<Maybe<Scalars['String']>>>;
  datebetween?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTrendArgs = {
  sport_slug?: Maybe<Scalars['String']>;
  league_slug?: Maybe<Scalars['String']>;
  league_type?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  timezone_offset?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['String']>;
  market_slug?: Maybe<Scalars['String']>;
  market?: Maybe<Array<Maybe<Scalars['String']>>>;
  factor_between?: Maybe<Array<Maybe<Scalars['String']>>>;
  order_type?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  lang?: Maybe<Scalars['String']>;
  user_ip?: Maybe<Scalars['String']>;
};


export type QueryUserStatusArgs = {
  user_ip?: Maybe<Scalars['String']>;
};


export type QueryVoteArgs = {
  sport_slug: Scalars['String'];
  league_slug?: Maybe<Scalars['String']>;
  match_slug?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type QueryPredictionCommentArgs = {
  match_id?: Maybe<Scalars['String']>;
  match_slug?: Maybe<Scalars['String']>;
  sport_slug?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  dislike?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTournamentPredictionArgs = {
  sport_slug?: Maybe<Scalars['String']>;
  league_slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  timezone_offset?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  relevance_type?: Maybe<Scalars['String']>;
};

/** A tennis ranking */
export type Ranking = {
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  country: Maybe<Country>;
  slug: Maybe<Scalars['String']>;
  rank: Maybe<Scalars['Int']>;
  points: Maybe<Scalars['Int']>;
  /** A logo */
  logo: Maybe<Scalars['String']>;
};


/** A tennis ranking */
export type RankingLogoArgs = {
  preset?: Maybe<Scalars['String']>;
};

/** Rate */
export type Rate = {
  bookmaker: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
  change: Maybe<Scalars['String']>;
  updated: Maybe<Scalars['String']>;
};

/** RateBookmaker */
export type RateBookmaker = {
  slug: Maybe<Scalars['String']>;
  items: Maybe<Rate>;
};

/** RateSimple */
export type RateSimple = {
  type: Maybe<Scalars['String']>;
  rates: Maybe<Array<Maybe<Rate>>>;
  /** deprecated */
  Xstavka: Maybe<Rate>;
  /** deprecated */
  ligastavok: Maybe<Rate>;
  /** deprecated */
  leon: Maybe<Rate>;
  /** deprecated */
  fonbet: Maybe<Rate>;
  /** deprecated */
  stavkaTV: Maybe<Rate>;
  /** deprecated */
  winline: Maybe<Rate>;
  /** deprecated */
  marathon: Maybe<Rate>;
  /** deprecated */
  parimatch: Maybe<Rate>;
  /** deprecated */
  zenit: Maybe<Rate>;
  /** deprecated */
  bet365: Maybe<Rate>;
  /** deprecated */
  lsbet: Maybe<Rate>;
  /** deprecated */
  betway: Maybe<Rate>;
};

/** A result statistic item */
export type ResultStatistic = {
  home: Maybe<Array<Maybe<ResultStatisticItem>>>;
  away: Maybe<Array<Maybe<ResultStatisticItem>>>;
  overall: Maybe<Array<Maybe<ResultStatisticItem>>>;
};

/** A statistic item */
export type ResultStatisticItem = {
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['Float']>;
};

/** A trend card */
export type ResultTrend = {
  match: Maybe<Match>;
  prediction: Maybe<TrendPrediction>;
  facts: Maybe<Array<Maybe<Scalars['String']>>>;
  facts_details: Maybe<Array<Maybe<TrendFactDetails>>>;
  facts_count: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['String']>;
};

/** A score */
export type Score = {
  type: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

/** A SearchResult */
export type SearchResult = {
  players: Maybe<Array<Maybe<Player>>>;
  teams: Maybe<Array<Maybe<Team>>>;
  leagues: Maybe<Array<Maybe<League>>>;
  countries: Maybe<Array<Maybe<Country>>>;
};


/** A SearchResult */
export type SearchResultTeamsArgs = {
  is_national?: Maybe<Scalars['Boolean']>;
};

/** A SearchResult */
export type SearchResultItem = {
  title: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  info: Maybe<Scalars['String']>;
  /** A logo */
  logo: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  sport_slug: Maybe<Scalars['String']>;
};


/** A SearchResult */
export type SearchResultItemLogoArgs = {
  preset?: Maybe<Scalars['String']>;
};

/** A SearchResult */
export type SearchStringResult = {
  players: Maybe<Array<Maybe<SearchResultItem>>>;
  teams: Maybe<Array<Maybe<SearchResultItem>>>;
  leagues: Maybe<Array<Maybe<SearchResultItem>>>;
  countries: Maybe<Array<Maybe<SearchResultItem>>>;
};


/** A SearchResult */
export type SearchStringResultTeamsArgs = {
  is_national?: Maybe<Scalars['Boolean']>;
};

/** Season */
export type Season = {
  slug: Maybe<Scalars['String']>;
  year: Maybe<Scalars['String']>;
};

/** SeasonPlayerStatistic */
export type SeasonPlayerStatistic = {
  unique_tournament_id: Maybe<Scalars['String']>;
  season_id: Maybe<Scalars['String']>;
  season_name: Maybe<Scalars['String']>;
  season_year: Maybe<Scalars['String']>;
  season_start: Maybe<Scalars['String']>;
  season_end: Maybe<Scalars['String']>;
  unique_tournament_name: Maybe<Scalars['String']>;
  unique_tournament_slug: Maybe<Scalars['String']>;
  sport_slug: Maybe<Scalars['String']>;
  category_slug: Maybe<Scalars['String']>;
  country: Maybe<Country>;
  assists: Maybe<Array<Maybe<SeasonPlayerStatisticItem>>>;
  goalscorers: Maybe<Array<Maybe<SeasonPlayerStatisticItem>>>;
  red_cards: Maybe<Array<Maybe<SeasonPlayerStatisticItem>>>;
  yellow_cards: Maybe<Array<Maybe<SeasonPlayerStatisticItem>>>;
};

/** SeasonPlayerStatisticItem */
export type SeasonPlayerStatisticItem = {
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
  team_id: Maybe<Scalars['String']>;
  team_name: Maybe<Scalars['String']>;
  team_gender: Maybe<Scalars['String']>;
  /** A logo */
  logo: Maybe<Scalars['String']>;
  /** A logo */
  team_logo: Maybe<Scalars['String']>;
  team_slug: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  tournament_ranking: Maybe<Scalars['Int']>;
  matches_played_in_tournament: Maybe<Scalars['Int']>;
  position: Maybe<Scalars['String']>;
};


/** SeasonPlayerStatisticItem */
export type SeasonPlayerStatisticItemLogoArgs = {
  preset?: Maybe<Scalars['String']>;
};


/** SeasonPlayerStatisticItem */
export type SeasonPlayerStatisticItemTeam_LogoArgs = {
  preset?: Maybe<Scalars['String']>;
};

/** A server status */
export type ServerStatus = {
  datetime: Maybe<Scalars['String']>;
  timezone: Maybe<Scalars['String']>;
  repair: Maybe<Scalars['Boolean']>;
  version: Maybe<Scalars['String']>;
};

/** A Social Account */
export type SocialAccount = {
  email: Maybe<Scalars['String']>;
  provider: Maybe<Scalars['String']>;
};

/** A sport */
export type Sport = {
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  color: Maybe<Scalars['String']>;
  favorite_leagues: Maybe<Array<Maybe<League>>>;
  favorite_teams: Maybe<Array<Maybe<Team>>>;
  favorite_players: Maybe<Array<Maybe<Player>>>;
  top_leagues: Maybe<Array<Maybe<League>>>;
  top_teams: Maybe<Array<Maybe<Team>>>;
  top_players: Maybe<Array<Maybe<Player>>>;
};


/** A sport */
export type SportFavorite_LeaguesArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A sport */
export type SportFavorite_TeamsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A sport */
export type SportFavorite_PlayersArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A sport */
export type SportTop_LeaguesArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A sport */
export type SportTop_TeamsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A sport */
export type SportTop_PlayersArgs = {
  limit?: Maybe<Scalars['Int']>;
};

/** The list of sports */
export type SportEnum = 
  'soccer' |
  'ice_hockey' |
  'tennis' |
  'basketball' |
  'volleyball' |
  'csgo' |
  'snooker';

/** A sport list type */
export type SportPredictionList = {
  slug: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  count: Maybe<Scalars['Int']>;
  items: Maybe<Array<Maybe<CachedPrediction>>>;
};

/** A stadium */
export type Stadium = {
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  address: Maybe<Scalars['String']>;
  surface: Maybe<Scalars['String']>;
  capacity: Maybe<Scalars['String']>;
};

/** A standing */
export type Standing = {
  category_name: Maybe<Scalars['String']>;
  tournament_name: Maybe<Scalars['String']>;
  season_name: Maybe<Scalars['String']>;
  season_year: Maybe<Scalars['String']>;
  league_table_id: Maybe<Scalars['String']>;
  league_table_name: Maybe<Scalars['String']>;
  league_table_round: Maybe<Scalars['String']>;
  league_table_type: Maybe<Scalars['String']>;
  team: Maybe<Team>;
  position_total: Maybe<Scalars['String']>;
  sort_position_total: Maybe<Scalars['String']>;
  position_away: Maybe<Scalars['String']>;
  sort_position_away: Maybe<Scalars['String']>;
  position_home: Maybe<Scalars['String']>;
  sort_position_home: Maybe<Scalars['String']>;
  change_total: Maybe<Scalars['String']>;
  change_away: Maybe<Scalars['String']>;
  change_home: Maybe<Scalars['String']>;
  matches_total: Maybe<Scalars['String']>;
  matches_away: Maybe<Scalars['String']>;
  matches_home: Maybe<Scalars['String']>;
  win_total: Maybe<Scalars['String']>;
  win_away: Maybe<Scalars['String']>;
  win_home: Maybe<Scalars['String']>;
  draw_total: Maybe<Scalars['String']>;
  draw_away: Maybe<Scalars['String']>;
  draw_home: Maybe<Scalars['String']>;
  loss_total: Maybe<Scalars['String']>;
  loss_away: Maybe<Scalars['String']>;
  loss_home: Maybe<Scalars['String']>;
  goals_total: Maybe<Scalars['String']>;
  goals_total_away: Maybe<Scalars['String']>;
  goals_total_home: Maybe<Scalars['String']>;
  goals_for_total: Maybe<Scalars['String']>;
  goals_for_away: Maybe<Scalars['String']>;
  goals_for_home: Maybe<Scalars['String']>;
  goals_against_total: Maybe<Scalars['String']>;
  goals_against_away: Maybe<Scalars['String']>;
  goals_against_home: Maybe<Scalars['String']>;
  goal_diff_total: Maybe<Scalars['String']>;
  goal_diff_away: Maybe<Scalars['String']>;
  goal_diff_home: Maybe<Scalars['String']>;
  points_total: Maybe<Scalars['String']>;
  pct_total: Maybe<Scalars['String']>;
  points_away: Maybe<Scalars['String']>;
  points_home: Maybe<Scalars['String']>;
  matches: Maybe<Array<Maybe<Match>>>;
  description: Maybe<Scalars['String']>;
  matches_total_live: Maybe<Scalars['String']>;
  win_total_live: Maybe<Scalars['String']>;
  draw_total_live: Maybe<Scalars['String']>;
  loss_total_live: Maybe<Scalars['String']>;
  goals_for_total_live: Maybe<Scalars['String']>;
  goals_against_total_live: Maybe<Scalars['String']>;
  points_total_live: Maybe<Scalars['String']>;
  position_total_live: Maybe<Scalars['String']>;
  description_live: Maybe<Scalars['String']>;
  promotion_id: Maybe<Scalars['String']>;
  promotion_name: Maybe<Scalars['String']>;
  promotion_id_live: Maybe<Scalars['String']>;
  promotion_name_live: Maybe<Scalars['String']>;
  comment: Maybe<Scalars['String']>;
};

/** A league statistic */
export type Statistic = {
  home: Maybe<Array<Maybe<OneStaticsRecord>>>;
  overall: Maybe<Array<Maybe<OneStaticsRecord>>>;
  away: Maybe<Array<Maybe<OneStaticsRecord>>>;
  statistics: Maybe<Array<Maybe<StatisticsItem>>>;
  results_statistic: Maybe<ResultStatistic>;
  matches: Maybe<MatchesStatistic>;
  goals_statistic: Maybe<GoalStatistic>;
  season: Maybe<League>;
};


/** A league statistic */
export type StatisticStatisticsArgs = {
  statistic_keys?: Maybe<Array<Maybe<StatisticsNameEnum>>>;
};

/** A statistic item */
export type StatisticsItem = {
  key: Maybe<StatisticsNameEnum>;
  sum: Maybe<Scalars['Float']>;
  avg: Maybe<Scalars['Float']>;
};

/** The types of Statistics name elements */
export type StatisticsNameEnum = 
  'win_home' |
  'win_away' |
  'win_overall' |
  'lose_home' |
  'lose_away' |
  'lose_overall' |
  'draw_home' |
  'draw_away' |
  'draw_overall' |
  'goals_home' |
  'goals_away' |
  'goals_overall' |
  'noGoals_home' |
  'noGoals_away' |
  'noGoals_overall' |
  'goalsInFirstTime_home' |
  'goalsInFirstTime_away' |
  'goalsInFirstTime_overall' |
  'goalInFirstTime_overall' |
  'noGoalsInFirstTime_home' |
  'noGoalsInFirstTime_away' |
  'noGoalsInFirstTime_overall' |
  'goalsInSecondTime_home' |
  'goalsInSecondTime_away' |
  'goalsInSecondTime_overall' |
  'goalInSecondTime_overall' |
  'noGoalsInSecondTime_home' |
  'noGoalsInSecondTime_away' |
  'noGoalsInSecondTime_overall' |
  'goalsAgainst_home' |
  'goalsAgainst_away' |
  'goalsAgainst_overall' |
  'noGoalsAgainst_home' |
  'noGoalsAgainst_away' |
  'noGoalsAgainst_overall' |
  'goalsAgainstInFirstTime_home' |
  'goalsAgainstInFirstTime_away' |
  'goalsAgainstInFirstTime_overall' |
  'noGoalsAgainstInFirstTime_home' |
  'noGoalsAgainstInFirstTime_away' |
  'noGoalsAgainstInFirstTime_overall' |
  'goalsAgainstInSecondTime_home' |
  'goalsAgainstInSecondTime_away' |
  'goalsAgainstInSecondTime_overall' |
  'noGoalsAgainstInSecondTime_home' |
  'noGoalsAgainstInSecondTime_away' |
  'noGoalsAgainstInSecondTime_overall' |
  'goal_home_0_15' |
  'goal_home_15_30' |
  'goal_home_30_45' |
  'goal_home_45_60' |
  'goal_home_60_75' |
  'goal_home_75_90' |
  'goal_away_0_15' |
  'goal_away_15_30' |
  'goal_away_30_45' |
  'goal_away_45_60' |
  'goal_away_60_75' |
  'goal_away_75_90' |
  'goal_overall_0_15' |
  'goal_overall_15_30' |
  'goal_overall_30_45' |
  'goal_overall_45_60' |
  'goal_overall_60_75' |
  'goal_overall_75_90' |
  'goalAgainst_home_0_15' |
  'goalAgainst_home_15_30' |
  'goalAgainst_home_30_45' |
  'goalAgainst_home_45_60' |
  'goalAgainst_home_60_75' |
  'goalAgainst_home_75_90' |
  'goalAgainst_away_0_15' |
  'goalAgainst_away_15_30' |
  'goalAgainst_away_30_45' |
  'goalAgainst_away_45_60' |
  'goalAgainst_away_60_75' |
  'goalAgainst_away_75_90' |
  'goalAgainst_overall_0_15' |
  'goalAgainst_overall_15_30' |
  'goalAgainst_overall_30_45' |
  'goalAgainst_overall_45_60' |
  'goalAgainst_overall_60_75' |
  'goalAgainst_overall_75_90' |
  'cornerInMatch_home' |
  'cornerInMatch_away' |
  'cornerInMatch_overall' |
  'corner_home' |
  'corner_away' |
  'corner_overall' |
  'cornerAgainstInMatch_home' |
  'cornerAgainstInMatch_away' |
  'cornerAgainstInMatch_overall' |
  'cornerAgainst_home' |
  'cornerAgainst_away' |
  'cornerAgainst_overall' |
  'yellowCardInMatch_home' |
  'yellowCardInMatch_away' |
  'yellowCardInMatch_overall' |
  'redCardInMatch_home' |
  'redCardInMatch_away' |
  'redCardInMatch_overall' |
  'yellowCard_home' |
  'yellowCard_away' |
  'yellowCard_overall' |
  'redCard_home' |
  'redCard_away' |
  'redCard_overall' |
  'yellowRedCardInMatch_home' |
  'yellowRedCardInMatch_away' |
  'yellowRedCardInMatch_overall' |
  'ballPossession_home' |
  'ballPossession_away' |
  'ballPossession_overall' |
  'halfWithoutGoals_home' |
  'halfWithoutGoals_away' |
  'halfWithoutGoals_overall' |
  'halfUnderTowGoals_home' |
  'halfUnderTowGoals_away' |
  'halfUnderTowGoals_overall' |
  'halfUnderThreeGoals_home' |
  'halfUnderThreeGoals_away' |
  'halfUnderThreeGoals_overall' |
  'halfUnderFourGoals_home' |
  'halfUnderFourGoals_away' |
  'halfUnderFourGoals_overall' |
  'resultWithoutGoals_home' |
  'resultWithoutGoals_away' |
  'resultWithoutGoals_overall' |
  'resultUnderTowGoals_home' |
  'resultUnderTowGoals_away' |
  'resultUnderTowGoals_overall' |
  'resultUnderThreeGoals_home' |
  'resultUnderThreeGoals_away' |
  'resultUnderThreeGoals_overall' |
  'resultUnderFourGoals_home' |
  'resultUnderFourGoals_away' |
  'resultUnderFourGoals_overall' |
  'positiveTeamMatches_home' |
  'positiveTeamMatches_away' |
  'positiveTeamMatches_overall' |
  'positiveAgainstTeamMatches_home' |
  'positiveAgainstTeamMatches_away' |
  'positiveAgainstTeamMatches_overall' |
  'BTS_home' |
  'BTS_away' |
  'BTS_overall' |
  'totalUnderHalf_home' |
  'totalUnderHalf_away' |
  'totalUnderHalf_overall' |
  'totalUnderOneAndHalf_home' |
  'totalUnderOneAndHalf_away' |
  'totalUnderOneAndHalf_overall' |
  'totalUnderTwoAndHalf_home' |
  'totalUnderTwoAndHalf_away' |
  'totalUnderTwoAndHalf_overall' |
  'totalUnderThreeAndHalf_home' |
  'totalUnderThreeAndHalf_away' |
  'totalUnderThreeAndHalf_overall' |
  'totalUnderFourAndHalf_home' |
  'totalUnderFourAndHalf_away' |
  'totalUnderFourAndHalf_overall' |
  'teamTotalUnderHalf_home' |
  'teamTotalUnderHalf_away' |
  'teamTotalUnderHalf_overall' |
  'teamTotalUnderOneAndHalf_home' |
  'teamTotalUnderOneAndHalf_away' |
  'teamTotalUnderOneAndHalf_overall' |
  'teamTotalUnderTwoAndHalf_home' |
  'teamTotalUnderTwoAndHalf_away' |
  'teamTotalUnderTwoAndHalf_overall' |
  'teamTotalUnderThreeAndHalf_home' |
  'teamTotalUnderThreeAndHalf_away' |
  'teamTotalUnderThreeAndHalf_overall' |
  'teamTotalUnderFourAndHalf_home' |
  'teamTotalUnderFourAndHalf_away' |
  'teamTotalUnderFourAndHalf_overall' |
  'totalOverHalf_home' |
  'totalOverHalf_away' |
  'totalOverHalf_overall' |
  'totalOverOneAndHalf_home' |
  'totalOverOneAndHalf_away' |
  'totalOverOneAndHalf_overall' |
  'totalOverTwoAndHalf_home' |
  'totalOverTwoAndHalf_away' |
  'totalOverTwoAndHalf_overall' |
  'totalOverThreeAndHalf_home' |
  'totalOverThreeAndHalf_away' |
  'totalOverThreeAndHalf_overall' |
  'totalOverFourAndHalf_home' |
  'totalOverFourAndHalf_away' |
  'totalOverFourAndHalf_overall' |
  'teamTotalOverHalf_home' |
  'teamTotalOverHalf_away' |
  'teamTotalOverHalf_overall' |
  'teamTotalOverOneAndHalf_home' |
  'teamTotalOverOneAndHalf_away' |
  'teamTotalOverOneAndHalf_overall' |
  'teamTotalOverTwoAndHalf_home' |
  'teamTotalOverTwoAndHalf_away' |
  'teamTotalOverTwoAndHalf_overall' |
  'teamTotalOverThreeAndHalf_home' |
  'teamTotalOverThreeAndHalf_away' |
  'teamTotalOverThreeAndHalf_overall' |
  'teamTotalOverFourAndHalf_home' |
  'teamTotalOverFourAndHalf_away' |
  'teamTotalOverFourAndHalf_overall' |
  'winFirstHalf_home' |
  'winFirstHalf_away' |
  'winFirstHalf_overall' |
  'drawFirstHalf_home' |
  'drawFirstHalf_away' |
  'drawFirstHalf_overall' |
  'loseFirstHalf_home' |
  'loseFirstHalf_away' |
  'loseFirstHalf_overall' |
  'winSecondHalf_home' |
  'winSecondHalf_away' |
  'winSecondHalf_overall' |
  'drawSecondHalf_home' |
  'drawSecondHalf_away' |
  'drawSecondHalf_overall' |
  'loseSecondHalf_home' |
  'loseSecondHalf_away' |
  'loseSecondHalf_overall' |
  'teamWithoutGoals_home' |
  'teamWithoutGoals_away' |
  'teamWithoutGoals_overall' |
  'cleanSheet_home' |
  'cleanSheet_away' |
  'cleanSheet_overall' |
  'oddGoalResult_home' |
  'oddGoalResult_away' |
  'oddGoalResult_overall' |
  'evenGoalResult_home' |
  'evenGoalResult_away' |
  'evenGoalResult_overall' |
  'failToScore_home' |
  'failToScore_away' |
  'failToScore_overall' |
  'noOneScore_home' |
  'noOneScore_away' |
  'noOneScore_overall' |
  'oneTeamScore_home' |
  'oneTeamScore_away' |
  'oneTeamScore_overall' |
  'firstGoalAgainstTime_home' |
  'firstGoalAgainstTime_away' |
  'firstGoalAgainstTime_overall' |
  'firstGoalTime_home' |
  'firstGoalTime_away' |
  'firstGoalTime_overall' |
  'teamFirstToScore_home' |
  'teamFirstToScore_away' |
  'teamFirstToScore_overall' |
  'teamFirstToMiss_home' |
  'teamFirstToMiss_away' |
  'teamFirstToMiss_overall' |
  'fouls_home' |
  'fouls_away' |
  'fouls_overall' |
  'offsides_home' |
  'offsides_away' |
  'offsides_overall' |
  'shots_off_goal_home' |
  'shots_off_goal_away' |
  'shots_off_goal_overall' |
  'shots_on_goal_home' |
  'shots_on_goal_away' |
  'shots_on_goal_overall' |
  'timeToGoal_home' |
  'timeToGoal_away' |
  'timeToGoal_overall' |
  'timeToGoalAgainst_home' |
  'timeToGoalAgainst_away' |
  'timeToGoalAgainst_overall' |
  'matchesCount_home' |
  'matchesCount_away' |
  'matchesCount_overall' |
  'seasonMatchesCount_home' |
  'seasonMatchesCount_away' |
  'seasonMatchesCount_overall' |
  'firstHalfTotalUnderHalf_overall' |
  'firstHalfTotalUnderOneAndHalf_overall' |
  'firstHalfTotalUnderTwoAndHalf_overall' |
  'firstHalfTotalUnderThreeAndHalf_overall' |
  'firstHalfTotalUnderFourAndHalf_overall' |
  'firstHalfTotalOverHalf_overall' |
  'firstHalfTotalOverOneAndHalf_overall' |
  'firstHalfTotalOverTwoAndHalf_overall' |
  'firstHalfTotalOverThreeAndHalf_overall' |
  'firstHalfTotalOverFourAndHalf_overall' |
  'secondHalfTotalUnderHalf_overall' |
  'secondHalfTotalUnderOneAndHalf_overall' |
  'secondHalfTotalUnderTwoAndHalf_overall' |
  'secondHalfTotalUnderThreeAndHalf_overall' |
  'secondHalfTotalUnderFourAndHalf_overall' |
  'secondHalfTotalOverHalf_overall' |
  'secondHalfTotalOverOneAndHalf_overall' |
  'secondHalfTotalOverTwoAndHalf_overall' |
  'secondHalfTotalOverThreeAndHalf_overall' |
  'secondHalfTotalOverFourAndHalf_overall' |
  'firstHalfTotalUnderHalf_home' |
  'firstHalfTotalUnderOneAndHalf_home' |
  'firstHalfTotalUnderTwoAndHalf_home' |
  'firstHalfTotalUnderThreeAndHalf_home' |
  'firstHalfTotalUnderFourAndHalf_home' |
  'firstHalfTotalOverHalf_home' |
  'firstHalfTotalOverOneAndHalf_home' |
  'firstHalfTotalOverTwoAndHalf_home' |
  'firstHalfTotalOverThreeAndHalf_home' |
  'firstHalfTotalOverFourAndHalf_home' |
  'secondHalfTotalUnderHalf_home' |
  'secondHalfTotalUnderOneAndHalf_home' |
  'secondHalfTotalUnderTwoAndHalf_home' |
  'secondHalfTotalUnderThreeAndHalf_home' |
  'secondHalfTotalUnderFourAndHalf_home' |
  'secondHalfTotalOverHalf_home' |
  'secondHalfTotalOverOneAndHalf_home' |
  'secondHalfTotalOverTwoAndHalf_home' |
  'secondHalfTotalOverThreeAndHalf_home' |
  'secondHalfTotalOverFourAndHalf_home' |
  'firstHalfTotalUnderHalf_away' |
  'firstHalfTotalUnderOneAndHalf_away' |
  'firstHalfTotalUnderTwoAndHalf_away' |
  'firstHalfTotalUnderThreeAndHalf_away' |
  'firstHalfTotalUnderFourAndHalf_away' |
  'firstHalfTotalOverHalf_away' |
  'firstHalfTotalOverOneAndHalf_away' |
  'firstHalfTotalOverTwoAndHalf_away' |
  'firstHalfTotalOverThreeAndHalf_away' |
  'firstHalfTotalOverFourAndHalf_away' |
  'secondHalfTotalUnderHalf_away' |
  'secondHalfTotalUnderOneAndHalf_away' |
  'secondHalfTotalUnderTwoAndHalf_away' |
  'secondHalfTotalUnderThreeAndHalf_away' |
  'secondHalfTotalUnderFourAndHalf_away' |
  'secondHalfTotalOverHalf_away' |
  'secondHalfTotalOverOneAndHalf_away' |
  'secondHalfTotalOverTwoAndHalf_away' |
  'secondHalfTotalOverThreeAndHalf_away' |
  'secondHalfTotalOverFourAndHalf_away' |
  'dryWin_overall' |
  'dryLose_overall' |
  'loseWilled_overall' |
  'winWilled_overall' |
  'dryWin_home' |
  'dryLose_home' |
  'loseWilled_home' |
  'winWilled_home' |
  'dryWin_away' |
  'dryLose_away' |
  'loseWilled_away' |
  'winWilled_away' |
  'matchFirstGoalTime_home' |
  'matchFirstGoalTime_away' |
  'matchFirstGoalTime_overall' |
  'matchTimeToGoal_home' |
  'matchTimeToGoal_away' |
  'matchTimeToGoal_overall' |
  'matchGoals_home' |
  'matchGoals_away' |
  'matchGoals_overall' |
  'matchGoalsInFirstTime_home' |
  'matchGoalsInFirstTime_away' |
  'matchGoalsInFirstTime_overall' |
  'matchGoalsInSecondTime_home' |
  'matchGoalsInSecondTime_away' |
  'matchGoalsInSecondTime_overall';

/** A match status */
export type Status = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

/** A subscriber */
export type Subscriber = {
  name: Maybe<Scalars['String']>;
  avatar: Maybe<Scalars['String']>;
};

/** Substitution */
export type SubstitutionType = {
  id: Maybe<Scalars['String']>;
  team: Maybe<Scalars['String']>;
  time: Maybe<Scalars['String']>;
  injury_time: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  incoming_player: Maybe<Player>;
  outgoing_player: Maybe<Player>;
};

/** A team */
export type Team = {
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  short_name: Maybe<Scalars['String']>;
  betradar_team_id: Maybe<Scalars['String']>;
  gender: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  country: Maybe<Country>;
  /** A logo */
  logo: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  formation: Maybe<Scalars['String']>;
  match_statistics: Maybe<MatchStatistics>;
  match_statistic: Maybe<MatchStatistic>;
  lineups: Maybe<Lineups>;
  fixtures: Maybe<Array<Maybe<Match>>>;
  results: Maybe<Array<Maybe<Match>>>;
  fixtures_leagues: Maybe<Array<Maybe<League>>>;
  results_leagues: Maybe<Array<Maybe<League>>>;
  players: Maybe<Array<Maybe<Player>>>;
  stadium: Maybe<Stadium>;
  subscribers: Maybe<Array<Maybe<Subscriber>>>;
  subscribers_count: Maybe<Scalars['Int']>;
  events_count: Maybe<Scalars['Int']>;
  description: Maybe<Scalars['String']>;
  is_redirect: Maybe<Scalars['Boolean']>;
  redirect_slug: Maybe<Scalars['String']>;
  has_squads: Maybe<Scalars['Boolean']>;
  has_h2h: Maybe<Scalars['Boolean']>;
  has_statistics: Maybe<Scalars['Boolean']>;
  sport_slug: Maybe<Scalars['String']>;
  has_news: Maybe<Scalars['Boolean']>;
  national_team: Maybe<Scalars['Boolean']>;
  linked_news: Maybe<Array<Maybe<News>>>;
  all_upcoming_leagues: Maybe<Array<Maybe<League>>>;
  home_upcoming_leagues: Maybe<Array<Maybe<League>>>;
  away_upcoming_leagues: Maybe<Array<Maybe<League>>>;
  all_past_leagues: Maybe<Array<Maybe<League>>>;
  home_past_leagues: Maybe<Array<Maybe<League>>>;
  away_past_leagues: Maybe<Array<Maybe<League>>>;
  statistics_leagues: Maybe<Array<Maybe<League>>>;
};


/** A team */
export type TeamLogoArgs = {
  preset?: Maybe<Scalars['String']>;
};


/** A team */
export type TeamFixturesArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A team */
export type TeamResultsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A team */
export type TeamLinked_NewsArgs = {
  limit?: Maybe<Scalars['Int']>;
};

/** The list of supported team type enum */
export type TeamTypeEnum = 
  'home' |
  'away';

/** A Test */
export type Test = {
  test: Maybe<Scalars['String']>;
};

/** A one statistic */
export type ThreePlaceStatics = {
  home: Maybe<OneStaticsRecord>;
  away: Maybe<OneStaticsRecord>;
  overall: Maybe<OneStaticsRecord>;
};

export type TopRates = {
  name: Maybe<Scalars['String']>;
  count: Maybe<Scalars['String']>;
  rate_slug: Maybe<Scalars['String']>;
  values: Maybe<Array<Maybe<TopRatesValues>>>;
};

export type TopRatesValues = {
  outcome: Maybe<Scalars['String']>;
  outcome_value: Maybe<Scalars['String']>;
  value: Maybe<Scalars['Float']>;
  count: Maybe<Scalars['String']>;
  bookmaker: Maybe<Bookmaker>;
};

/** A tournament */
export type Tournament = {
  name: Maybe<Scalars['String']>;
};

/** A type */
export type TournamentPredictionList = {
  upcoming: Maybe<LeaguePredictionList>;
  past: Maybe<LeaguePredictionList>;
};

/** A palyer transfer */
export type Transfer = {
  date: Maybe<Scalars['String']>;
  marketValue: Maybe<Scalars['String']>;
  transferFee: Maybe<Scalars['String']>;
  movingFromTeam: Maybe<Movement>;
  movingToTeam: Maybe<Movement>;
};

/** A trend results and filter */
export type Trend = {
  filter: Maybe<FilterTrend>;
  result: Maybe<Array<Maybe<ResultTrend>>>;
};


/** A trend results and filter */
export type TrendResultArgs = {
  order_type?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sport_slug?: Maybe<Scalars['String']>;
  league_slug?: Maybe<Scalars['String']>;
  league_type?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  timezone_offset?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['String']>;
  market_slug?: Maybe<Scalars['String']>;
};

/** Fact details */
export type TrendFactDetails = {
  text: Maybe<Scalars['String']>;
  team: Maybe<Team>;
};

/** A trend prediction card */
export type TrendPrediction = {
  value: Maybe<Scalars['Float']>;
  type: Maybe<Array<Maybe<Scalars['String']>>>;
  bookmaker_slug: Maybe<Scalars['String']>;
};

/** A user info */
export type User = {
  about: Maybe<Scalars['String']>;
  approved: Maybe<Scalars['Boolean']>;
  /** A logo */
  avatar: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  gender: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  nickname: Maybe<Scalars['String']>;
  favorite_team: Maybe<Team>;
  favorite_national_team: Maybe<Team>;
  show_favorite_team: Maybe<Scalars['Boolean']>;
  show_favorite_national_team: Maybe<Scalars['Boolean']>;
  socials: Maybe<Array<Maybe<SocialAccount>>>;
  auth: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
};


/** A user info */
export type UserAvatarArgs = {
  preset?: Maybe<Scalars['String']>;
};

/** A user status */
export type UserStatus = {
  auth: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  /** A logo */
  avatar: Maybe<Scalars['String']>;
  location: Maybe<Scalars['String']>;
  timezone: Maybe<Scalars['String']>;
  subdivision: Maybe<Scalars['String']>;
  offset: Maybe<Scalars['Int']>;
};


/** A user status */
export type UserStatusAvatarArgs = {
  preset?: Maybe<Scalars['String']>;
};


/** A user status */
export type UserStatusLocationArgs = {
  default_lang?: Maybe<Scalars['String']>;
};

/** За что проголосовал пользователь */
export type UserVoteEnum = 
  'y' |
  'n' |
  'none';

/** A one statistic */
export type ValueNameStatic = {
  /** type */
  name: Maybe<Scalars['String']>;
  /** type */
  value: Maybe<Scalars['String']>;
};

/** Venue */
export type Venue = {
  country: Maybe<VenueCountry>;
  city: Maybe<VenueCity>;
  stadium: Maybe<VenueStadium>;
};

/** VenueCity */
export type VenueCity = {
  name: Maybe<Scalars['String']>;
};

/** VenueCountry */
export type VenueCountry = {
  name: Maybe<Scalars['String']>;
};

/** VenueStadium */
export type VenueStadium = {
  name: Maybe<Scalars['String']>;
};

/** A vote */
export type Vote = {
  match: Maybe<Match>;
  is_voted: Maybe<Scalars['Boolean']>;
  votes: Maybe<VotesInfo>;
};

/** The list of supported vote enum */
export type VoteEnum = 
  'y' |
  'n';

/** A votes info */
export type VotesInfo = {
  one: Maybe<Scalars['Int']>;
  x: Maybe<Scalars['Int']>;
  two: Maybe<Scalars['Int']>;
};

export type Widget = {
  matches: Maybe<Array<Maybe<Match>>>;
  fact: Maybe<Scalars['String']>;
  number_serial: Maybe<Scalars['String']>;
  factor: Maybe<Scalars['String']>;
  prediction: Maybe<Array<Maybe<Scalars['String']>>>;
};
