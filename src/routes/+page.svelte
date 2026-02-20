<script lang="ts">
	type Todo = {
		text: string
		done: boolean
	}

	let todos: Todo[] = [
		{ text: 'Todo 1', done: false },
		{ text: 'Todo 2', done: false },
	]

	function addTodo(event: KeyboardEvent) {
		if (event.key !== 'Enter') return

		const input = event.target as HTMLInputElement
		const text = input.value.trim()
		if (!text) return

		todos = [...todos, { text, done: false }]
		input.value = ''
	}

	function deleteChecked() {
		todos = todos.filter(todo => !todo.done)
	}
</script>

<h1>Do-Too!</h1>

<div class="options">
	<button on:click={deleteChecked}>delete checked</button>
</div>

<input on:keydown={addTodo} placeholder="Add todo" type="text" />

<div class="todos">
	{#each todos as todo}
		<div class="todo">
			<input bind:value={todo.text} type="text" />
			<input bind:checked={todo.done} type="checkbox" />
		</div>
	{/each}
</div>