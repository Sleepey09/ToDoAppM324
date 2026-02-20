export type Todo = { text: string; done: boolean };

export function addTodo(list: Todo[], text: string): Todo[] {
  const t = text.trim();
  if (!t) return list;
  return [...list, { text: t, done: false }];
}

export function deleteChecked(list: Todo[]): Todo[] {
  return list.filter((t) => !t.done);
}