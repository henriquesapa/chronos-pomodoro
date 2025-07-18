import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  complateDate: number | null;
  interruptDate: number | null;
  type: keyof TaskStateModel['config'];
};
