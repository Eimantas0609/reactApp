import style from "./Header.module.css";

const Header = () => {
	return (
		<>
			<header className={style.header}>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR3mE39BZkRXAMbnivSKw0uSaI5kP5Bt36g&usqp=CAU"
					alt="Company name"
				/>
			</header>
		</>
	);
};

export default Header;
