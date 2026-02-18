<script lang="ts">
	let todos = $state([
		{ text: 'Todo 1', done: false },
		{ text: 'Todo 2', done: false },
	]);
</script>

<div class="todos">
	{#each todos as todo}
		<div class="todo">
			<input value={todo.text} type="text" />
			<input value={todo.done} type="checkbox" />
		</div>
	{/each}
</div>
