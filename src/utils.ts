import { Genre, SelectOption } from "./types";
import { newSelectOption } from "./helpers";

export const mapGenres = (genres: Genre[]): SelectOption[] => (
  genres.map((genre) => (newSelectOption(genre.id, genre.name)))
);
