export type SaveTracer = {
  title: string;
  priority: string;
  text: string;
  dateCreated: string;
  dateUpdated: string;
  owner: string;
};

export interface GetTracer extends SaveTracer {
  id: "string";
}

export type Sort = {
  high: GetTracer[];
  medium: GetTracer[];
  low: GetTracer[];
};
