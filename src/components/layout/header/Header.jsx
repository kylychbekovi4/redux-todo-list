import scss from "./Header.module.scss";
const Header = () => {
	return (
		<header className={scss.Header}>
			<div className="container">
				<h1>ToDo List</h1>
			</div>
		</header>
	);
};

export default Header;
