import { ObjectId } from "mongodb";

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
  tracerUserId: ObjectId;
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
  id: string;
  level: number;
  title: string;
  priority: string;
  text: string;
  complete: boolean;
};
