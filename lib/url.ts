import qs from "query-string";

interface FormUrlQuery {
  params: string;
  key: string;
  value: string;
}

interface RemoveKeysFromQuery {
  params: string;
  keys: string[];
}

export const formUrlQuery = ({ params, key, value }: FormUrlQuery) => {
  const queryString = qs.parse(params);

  queryString[key] = value;

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
};

export const removeKeysFromUrlQuery = ({
  params,
  keys,
}: RemoveKeysFromQuery) => {
  const queryString = qs.parse(params);

  keys.forEach((key) => {
    delete queryString[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    { skipNull: true }
  );
};
