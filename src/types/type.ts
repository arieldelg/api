export type SaveTracer = {
  title: string;
  priority: string;
  text: string;
  complete: boolean;
  dateCreated: string;
  dateUpdated: string;
  objectDay: {
    year: number;
    month: number;
    day: number;
  };
  owner: string;
  level: number;
};

export interface GetTracer extends SaveTracer {
  id: "string";
}

export type Sort = {
  high: GetTracer[];
  medium: GetTracer[];
  low: GetTracer[];
};

export type TracerPost = {
  level: number;
  title: string;
  priority: string;
  text: string;
  complete: boolean;
};
