import girder from "../girder";

export default async dataset => {
  var { data } = await girder.rest.get(`/item/${dataset._id}/tiles`);
  return data;
};
