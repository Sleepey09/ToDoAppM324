<script lang="ts">
	let todos = $state([
		{ text: 'Todo 1', done: false },
		{ text: 'Todo 2', done: false },
	]);
function addTodo(event: KeyboardEvent) {
		if (event.key !== 'Enter') return

		const todoEl = event.target as HTMLInputElement
		const text = todoEl.value
		const done = false

		todos = [...todos, { text, done }]

		todoEl.value = ''
	}
</script>
<h1>Do-Too!</h1>
<input onkeydown={addTodo} placeholder="Add todo" type="text" />

<div class="todos">
	{#each todos as todo}
		<div class="todo">
			<input value={todo.text} type="text" />
			<input value={todo.done} type="checkbox" />
		</div>
	{/each}
</div>
