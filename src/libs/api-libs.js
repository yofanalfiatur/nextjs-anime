export const getDataResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const data = await response.json();
  return data;
};

export const getNestedDataResponse = async (resourceNested, objectProperty) => {
  const response = await getDataResponse(resourceNested);
  return response.data.flatMap((item) => item[objectProperty]);
};

export const reproduce = (dataRecommend, gap) => {
  const firstData = ~~(Math.random() * (dataRecommend.length - gap) + 1);
  const lastData = firstData + gap;

  const response = {
    dataRecommend: dataRecommend.slice(firstData, lastData),
  };
  return response;
};
