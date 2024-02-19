import ReduxTodo from "../reduxTodo/ReduxTodo";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () => {
	return (
		<div className={scss.Layout}>
			<Header />
			<main>
				<ReduxTodo />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
