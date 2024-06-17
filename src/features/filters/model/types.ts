export type UpdateFiltersAction =
  | {
      type: "UPDATE_GENRES";
      payload: string[];
    }
  | {
      type: "UPDATE_YEAR" | "UPDATE_RATING";
      payload: string;
    };
