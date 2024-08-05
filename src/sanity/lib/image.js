import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source) => {
  return builder.image(source);
};
