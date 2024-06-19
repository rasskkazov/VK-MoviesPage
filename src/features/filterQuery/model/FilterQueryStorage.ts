import { makeAutoObservable } from "mobx";
import qs from "qs";

class FilterQueryStorage {
  private query: qs.ParsedQs;

  constructor() {
    makeAutoObservable(this);
  }

  setQuery(newQueryString: string) {
    this.query = qs.parse(newQueryString, { ignoreQueryPrefix: true });
  }

  getQuery() {
    return qs.stringify(this.query, {
      arrayFormat: "repeat",
      skipNulls: true,
      addQueryPrefix: false,
    });
  }

  setQueryParameter(parameterName: string, value: string | string[]) {
    this.query[parameterName] = value;
  }

  getQueryParameter(parameterName: string) {
    return this.query[parameterName];
  }
}

export const filterQueryStorage = new FilterQueryStorage();
