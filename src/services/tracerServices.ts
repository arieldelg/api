import { saveTracer } from "../lib/mongodb/post-tracer/saveTracer";

export type TracerPost = {
  title: string;
  priority: string;
  text: string;
};

export const tracer = {
  postTracer: (props: TracerPost) => saveTracer(props),
};
