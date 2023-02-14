import style from "./MyPosts.module.scss";
import Post from "./post/Post";

const MyPosts = () => {
	return (
		<>
			<div className={style.postBlock}>
				MyPosts
				<div>
					<textarea></textarea>
					<div>
						<button>Add post</button>
					</div>
				</div>
				<div className={style.posts}>
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</>
	);
};

export default MyPosts;
