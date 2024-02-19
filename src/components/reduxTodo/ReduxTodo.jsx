import TextField from "@mui/material/TextField";
import scss from "./ReduxTodo.module.scss";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ReduxTodo = () => {
	const data = useSelector((state) => state);
	const dispatch = useDispatch("");
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");
	const [userPhoto, setUserPhoto] = useState("");

	const [editingId, setEditingId] = useState(null);
	const [editName, setEditName] = useState("");
	const [editAge, setEditAge] = useState("");
	const [editPhoto, setEditPhoto] = useState("");

	const startEdit = (item) => {
		setEditingId(item.id);
		setEditName(item.name);
		setEditAge(item.age);
		setEditPhoto(item.photo);
	};

	const saveEdit = () => {
		dispatch({
			type: "Edit",
			payload: {
				id: editingId,
				updates: {
					name: editName,
					age: editAge,
					photo: editPhoto,
				},
			},
		});
		setEditingId(null);
		setEditName("");
		setEditAge("");
		setEditPhoto("");
	};

	const Ready = () => {
		if (userName === "" || userAge === "" || userPhoto === "") {
			alert("Заполнить пустые места");
		} else {
			dispatch({
				type: "Ready",
				payload: {
					id: Math.random(),
					name: userName,
					age: userAge,
					photo: userPhoto,
				},
			});
			setUserName("");
			setUserAge("");
			setUserPhoto("");
		}
	};

	const deleteAll = () => {
		dispatch({ type: "DeleteAll", payload: [] });
	};

	const deleteHandle = (id) => {
		dispatch({ type: "Delete", payload: { id } });
	};

	return (
		<div className={scss.ReduxTodo}>
			<div className="container">
				<div className={scss.Inputs}>
					<TextField
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						id="outlined-basic"
						label="User Name"
						variant="outlined"
						type="text"
					/>
					<TextField
						value={userAge}
						onChange={(e) => setUserAge(e.target.value)}
						type="number"
						id="outlined-basic"
						label="User Age"
						variant="outlined"
					/>
					<TextField
						value={userPhoto}
						type="url"
						onChange={(e) => setUserPhoto(e.target.value)}
						id="outlined-basic"
						label="User Photo"
						variant="outlined"
					/>
					<Button onClick={Ready} variant="contained">
						Ready
					</Button>
					<Button variant="contained" onClick={deleteAll}>
						Delete All
					</Button>
				</div>
				<div className={scss.Render}>
					{data.map((item) => (
						<div key={item.id}>
							{editingId === item.id ? (
								<div>
									<TextField
										value={editName}
										onChange={(e) => setEditName(e.target.value)}
									/>
									<TextField
										value={editAge}
										onChange={(e) => setEditAge(e.target.value)}
									/>
									<TextField
										value={editPhoto}
										onChange={(e) => setEditPhoto(e.target.value)}
									/>
									<Button onClick={saveEdit} variant="contained">
										Готова
									</Button>
									<Button
										onClick={() => setEditingId(null)}
										variant="contained">
										Назад
									</Button>
								</div>
							) : (
								<div className={scss.Result_render}>
									<h1>{item.name}</h1>
									<p>{item.age}</p>
									<img src={item.photo} alt={item.name} />
									<div className={scss.Edit_buttons}>
										<Button onClick={() => startEdit(item)} variant="contained">
											Edit
										</Button>
										<Button
											onClick={() => deleteHandle(item.id)}
											variant="contained">
											Delete
										</Button>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ReduxTodo;
