import { SelectOption } from "./types";

export const newSelectOption = (value: string, text: string): SelectOption => ({
  value,
  text
});
