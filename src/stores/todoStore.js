
import { writable } from "svelte/store";
export const todos = writable ([]);

export const addTodo = (text)=>{

   // @ts-ignore
         todos.update((cur)=>{

         const newTodos  = [...cur,{text,completed:false,id:
           Date.now() }];

           return newTodos;
   })

}

           export const deleteTodo = (id)=>{

     // @ts-ignore
             todos.update(todos =>todos.filter(todo=> todo.id !=id));
 }


 // @ts-ignore
      export const toggleTodoCompleted = (id)=>{

         todos.update (todos =>{

            let index = -1;

             for(let i =0; i<todos.length; i++){

              if(todos[i].id ===id){

            index =i; 
            break;

         }

      }
         if(index != -1){

           // @ts-ignore
           todos[index].completed =!todos[index].completed;


         }
           return todos
   })

 }
