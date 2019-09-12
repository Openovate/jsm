export default interface Event {
  event: string;
  pattern: string;
  variables: string[];
  args?: any[];
  callback?: Function;
  priority?: number;
}
