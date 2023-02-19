import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	// task es la funcion que atrapa la tarea a agregar en la lista
	const [task,settask]=useState("")

	// tasklist es el arreglo de tareas del todo list como tal.
	const [tasklist,setTasklist]=useState([])
	
	//e.prevent es para evitar que la pagina se refresque antes de capture el valor para el task
	const load = (e)=>{e.preventDefault();
		//luego de capturar el valor de la tarea la graba en el arreglo setlisttask([...tasklist,task])
		setTasklist([...tasklist,task]);
		//para por ultimo empezar el input vacio
		settask("")
	}
	//del: es la funcion para borrar el task=item(variable local) deseado, recibe la posicion del indexItem
	const del =(indexItem)=>{
		// el elemento actual (!==) no sea igual al valor del parámetro indexItem.
		setTasklist((prevItem)=>

		prevItem.filter((item,index)=>index!==indexItem))
	}

	return (
		<div className="text-center">
			<form type="submit" onSubmit={load}>
				<h1 className="text-center mt-5">Tareas</h1>
				<input type="text" className="text-center" placeholder="Ingrese la tarea" onChange={e=>settask(e.target.value)} value={task}/>
			</form>

				{/* renderiza lista de tareas <ul><ul/>*/}
				{/* map() de JavaScript. Para cada elemento del array, se crea un elemento li que contiene el 
				texto de la tarea y un botón para borrar la tarea.  */}
			<ul>{tasklist.map((item,index)=>{

				// El botón tiene un evento onClick que llama a la función borra con el índice del elemento 
				//como parámetro, lo que permite eliminar la tarea correspondiente cuando se hace clic en el botón.
				return (<li key={index}>{item}<button onClick={()=>del(index)}>🗑️</button></li>)
			})}
				
				</ul>	

		</div>
	);
};

export default Home;

// Finish in 37m45s