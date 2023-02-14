import style from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
	return (
		<>
			<div className={style.img}>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmzRKA__pZ05IX7K0VzXXz2SLLJzqsFuwVMQ&usqp=CAU"
					alt="img"
				/>
			</div>
			<div className={style.descrBlock}>ava + description</div>
		</>
	);
};

export default ProfileInfo;
