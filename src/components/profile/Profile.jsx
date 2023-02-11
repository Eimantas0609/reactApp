import style from "./Profile.module.scss";
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
	return (
		<>
			<div>
				<div className={style.img}>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmzRKA__pZ05IX7K0VzXXz2SLLJzqsFuwVMQ&usqp=CAU"
						alt="img"
					/>
				</div>
				<div>ava + description</div>
				<MyPosts />
			</div>
		</>
	);
};

export default Profile;
