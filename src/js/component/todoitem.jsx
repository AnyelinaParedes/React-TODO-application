import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
export default function TodoItem(props) {
	return (
		<div className="todo-row">
			{props.todo.text}
			<div className="iconsContainer">
				<RiCloseCircleLine
					className="icon"
					onClick={() => props.removeTodo(props.todo.id)}
				/>
			</div>
		</div>
	);
}
