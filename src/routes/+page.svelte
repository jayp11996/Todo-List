<script>
// @ts-nocheck

 import TodoForm from "../Components/TodoForm.svelte";
 import Todo from "../Components/Todo.svelte"
 import {todos} from "../stores/todoStore.js"
</script>



<main>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">My Todos</h1>
 <TodoForm/>

 {#each $todos as todo }

  <Todo todo = {todo} index ={todo.id}/>
    
 {/each}
</main>