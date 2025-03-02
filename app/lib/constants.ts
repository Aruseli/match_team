export enum Status {
  ONGOING = "Ongoing",
  FINISHED = "Finished",
  SCHEDULED = "Scheduled",
}

export const StatusColorMap: Record<Status, string> = {
  [Status.ONGOING]: 'green',
  [Status.FINISHED]: 'red',
  [Status.SCHEDULED]: 'orange',
}