import { saveTracer } from "../lib/mongodb/post-tracer/saveTracer";
import { TracerPost } from "../types/type";

export const tracer = {
  postTracer: (props: TracerPost) => saveTracer(props),
};
