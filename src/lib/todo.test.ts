import { expect, it } from 'vitest';
import { addTodo, deleteChecked, type Todo } from './todo';
import { describe } from 'node:test';

describe('todo helper functions', () => {
  it('appends a trimmed item', () => {
    const list: Todo[] = [];
    expect(addTodo(list, ' foo ')).toEqual([{ text: 'foo', done: false }]);
  });

  it('does not add empty strings', () => {
    expect(addTodo([], '   ')).toHaveLength(0);
  });

  it('filters out done todos', () => {
    const list: Todo[] = [
      { text: 'a', done: true },
      { text: 'b', done: false },
    ];
    expect(deleteChecked(list)).toEqual([{ text: 'b', done: false }]);
  });
});