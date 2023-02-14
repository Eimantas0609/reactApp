import style from "./Profile.module.scss";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
	return (
		<>
			<ProfileInfo />
			<MyPosts />
		</>
	);
};

export default Profile;
