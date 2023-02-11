import style from "./MyPosts.module.scss";
import Post from "./post/Post";

const MyPosts = () => {
	return (
		<>
			<div>
				My MyPosts
				<div>
					<textarea></textarea>
					<button>Add post</button>
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
