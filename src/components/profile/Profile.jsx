import style from "./Profile.module.css";

const Profile = () => {
	return (
		<>
			<div className="content">
				<div className={style.img}>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu7T_TSNJSxWdM5aNaekEunO3v1CYGSmlxg&usqp=CAU"
						alt="img"
					/>
				</div>
				<div>
					<img src="" alt="" />
				</div>
				<div className={style.posts}>My posts</div>
				<div className={style.item}>New post</div>
				<div className={style.item}>post 1</div>
				<div className={style.item}>post 2</div>
			</div>
		</>
	);
};

export default Profile;
