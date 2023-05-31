<script>
import {addTodo} from "..//stores/todoStore.js"
 let todo= '';
 


 const handleSubmit  = ()=>{
      addTodo(todo);
      todo = '';
     console.log("submitting")
 }
 
</script>


<form class="my-g" on:submit|preventDefault={handleSubmit}>
<div class="flex flex-col text-lg mb-2">
<label class="font-bold mb-2 text-gray-800" for="todo">Todo</label>
<input type="text" bind:value={todo} name="todo" placeholder="what will you add today Mr Pozo?" class="appearance-none shadow-sm border-grey-200 p-s focus:outline-none focus:border-gray-500 rounded-lg"/>

</div>
<button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4
">Submit</button>
</form>


