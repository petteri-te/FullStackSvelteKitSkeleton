<script>
    let task = "";
    export let data;
</script>

<h3>ADD TASK by POSTING HTML FORM</h3>
<form action="?/add" method="POST">
    <label for="todos">Todo task:</label>
    <input type="text" id="task" name="task" required /><br />
    <input type="submit" value="Add task" />
</form>

<h3>Task list</h3>
<p>
    This are in load() function that is always executed when the page is
    rendered and result is returned to client side <span style="color: blue;"
        >export let data;</span
    >
</p>

{#if data && data.props && data.props.todos && data.props.todos.length > 0}
    <ul>
        {#each data.props.todos as todo}
            <li>
                {todo.todo}
                <form action="?/delete" method="post" style="display: inline;">
                    <input type="hidden" name="id" value={todo.id} />
                    <button type="submit">Delete</button>
                </form>
            </li>
        {/each}
    </ul>
{:else}
    <p>No todos available</p>
{/if}
