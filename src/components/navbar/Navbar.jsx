import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<>
			<div className={style.nav}>
				<div className={style.item}>
					<NavLink
						className={({ isActive }) => (isActive ? style.active : style.item)}
						to="/profile">
						Profile
					</NavLink>
				</div>
				<div className={style.item}>
					<NavLink
						className={({ isActive }) => (isActive ? style.active : style.item)}
						to="/dialogs">
						Messages
					</NavLink>
				</div>
				<div className={style.item}>
					<NavLink
						className={({ isActive }) => (isActive ? style.active : style.item)}
						to="/news">
						News
					</NavLink>
				</div>
				<div className={style.item}>
					<NavLink
						className={({ isActive }) => (isActive ? style.active : style.item)}
						to="/music">
						Music
					</NavLink>
				</div>
				<div className={style.item}>
					<NavLink
						className={({ isActive }) => (isActive ? style.active : style.item)}
						to="/settings">
						Settings
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default Navbar;
