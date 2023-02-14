import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.scss";

const Dialog = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={style.dialog}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};

const Message = (props) => {
	return <div className="style.dialog">{props.message}</div>;
};

const Dialogs = () => {
	return (
		<>
			<div className={style.dialogs}>
				<div className={style.dialogItems}>
					<Dialog name="A" id="1" />
					<Dialog name="B" id="2" />
					<Dialog name="C" id="3" />
					<Dialog name="D" id="4" />
				</div>
				<div className={style.message}>
					<Message message="Hi" />
					<Message message="How" />
					<Message message="Yo" />
				</div>
			</div>
		</>
	);
};

export default Dialogs;
