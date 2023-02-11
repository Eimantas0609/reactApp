import style from "./Post.module.scss";

const Post = () => {
	return (
		<>
			<div className={style.item}>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZL5p16YV5QRk9p4t7VCNlp-PU2-5Yhv7wwg&usqp=CAU"
					alt="avatar"
				/>
				post
				<div>
					<span>like</span>
				</div>
			</div>
		</>
	);
};

export default Post;
