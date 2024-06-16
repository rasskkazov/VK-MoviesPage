import { TSelectOptions } from "@/shared/types/selectOptions";

export type UpdateFiltersAction =
  | {
      type: "UPDATE_GENRES";
      payload: TSelectOptions;
    }
  | {
      type: "UPDATE_YEAR";
      payload: string;
    }
  | {
      type: "UPDATE_RATING";
      payload: string;
    };
