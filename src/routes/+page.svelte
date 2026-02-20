<script lang="ts">
  import type { Todo } from '$lib/todo';
  import { addTodo as add, deleteChecked as del } from '$lib/todo';

  let todos: Todo[] = [
    { text: 'Todo 1', done: false },
    { text: 'Todo 2', done: false },
  ];

  function addTodo(event: KeyboardEvent) {
    if (event.key !== 'Enter') return;
    const input = event.target as HTMLInputElement;
    todos = add(todos, input.value);
    input.value = '';
  }

  function deleteChecked() {
    todos = del(todos);
  }
</script>

<div class="app">
	<h1 class="title">Do-Too!</h1>

	<div class="options">
		<button class="delete-btn" on:click={deleteChecked}>
			delete checked
		</button>
	</div>

	<input class="add-input" on:keydown={addTodo} placeholder="Add todo" />

	<div class="todos">
		{#each todos as todo}
			<div class="todo" class:done={todo.done}>
				<input class="text" bind:value={todo.text} type="text" />
				<input bind:checked={todo.done} type="checkbox" />
			</div>
		{/each}
	</div>
</div>

