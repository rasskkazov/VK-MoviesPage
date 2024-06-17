import {
  axiosInstanceKinop,
  axiosInstanceKinopV1,
} from "@/shared/api/axiosInstance";

const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export function fetchData<T>(
  url: string,
  options?: { params?: Record<string, string | number> },
  signal?: AbortSignal
) {
  return axiosInstanceKinop
    .get<T>(url, {
      ...getOptions,
      ...options,
      signal,
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}

//Версии в апи отличаются?
export function fetchDataV1<T>(
  url: string,
  options?: { params?: Record<string, string | number> },
  signal?: AbortSignal
) {
  return axiosInstanceKinopV1
    .get<T>(url, {
      ...getOptions,
      ...options,
      signal,
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}
