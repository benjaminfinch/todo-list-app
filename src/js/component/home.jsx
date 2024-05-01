import React, { useState } from "react";

const Home = () => {
	const [task, newTask] = useState("");
	const [taskList, setTaskList] = useState([]);
	const [edit, editTask] = useState("");

	const validateTask = () => {
		if (task === "") {
			alert("ADD TASK!");
			return false;
		} else {
			return true;
		}
	};
	const deleteTask = (index) => {
		setTaskList(taskList.filter((e, i) => i !== index));
	};

	return (
		<div className="todoList">
			<header>
				<h2>
					<strong>to-do list</strong>
				</h2>
			</header>
			<form className="todoForm" onSubmit={(e) => {
				e.preventDefault();
				if (validateTask()) {
					setTaskList([...taskList, task]);
					newTask("");
				};
			}}>
				<div className="inputTask">
					<input
						type="text"
						className="form-control inputArea"
						placeholder="add your task here"
						onChange={(e) => {
							newTask(e.target.value)
						}}
						value={task}
					/>
				</div>
				<div className="submitTask">
					<button
						type="submit"
						className="btn btn-secondary mb-3"
					>
						 submit it
					</button>
				</div>
			</form>
			<table>
				{taskList.length === 0 ? "" : 
					(<tr>
						<th className="number">n°</th>
						<th className="task">task</th>
						<th className="delete">delete</th>
					</tr>)
				}
				{taskList.map((e, i) => (
					<tr key={i + 1}>
						<td>{i + 1}</td>
						<td>{e}</td>
						<td>
							<strong>
								<button
									className="btn"
									onClick={() => deleteTask(i)}
								>
									<i className="fa-solid fa-trash-can"></i>
								</button>
							</strong>
						</td>
					</tr>
				))}
			</table>
			<div className="text-center">
				<p>
					<strong>
						{taskList.length === 0 ? "there's no task yet, add some!" : `${taskList.length} tasks to be done`}
					</strong>
				</p>
			</div>
		</div>
	);
};

export default Home;
