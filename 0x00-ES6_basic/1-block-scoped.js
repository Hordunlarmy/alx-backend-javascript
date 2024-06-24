export default function taskBlock (trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true; // eslint-disable-line
    let task2 = false; // eslint-disable-line
  }

  return [task, task2];
}
