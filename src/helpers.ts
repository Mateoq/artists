import { Artist, ArtistGenre, SelectOption } from "./types";

export const newSelectOption = (value: number, text: string): SelectOption => ({
  value,
  text
});

export const newArtist = (
  id: number,
  name: string,
  image: string,
  popularity: number,
  genres: ArtistGenre[]
): Artist => ({
  id,
  name,
  image,
  popularity,
  genres
});
