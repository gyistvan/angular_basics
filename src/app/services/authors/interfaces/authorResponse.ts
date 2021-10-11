import { Author } from './author';

export interface GetAuthorsResponse {
  successful: boolean;
  result: Author[];
}
export interface AddAuthorResponse {
  successful: boolean;
  result: Author;
}
