import { connect, useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form/Form";
import { setName, SET_NAME, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import "./Profile.scss"

export const Profile = (onLogout) => {
    const dispatch = useDispatch();


    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);

    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    const handleSubmit = (text) => {
        dispatch(setName(text));
    };

    return (
        <>
            <h3>This is PROFILE</h3>
            <div className="profile-wrap">
                <button className="profile-btn" onClick={onLogout}>LOGOUT</button>
                {showName && <span className="profile-name">{name}</span>}
                <button className="profile-btn" onClick={handleClick}>change show name</button>   {/* style={{margin: 10}} */}
                <Form onSubmit={handleSubmit} />
            </div>
        </>
    );
};


// const ProfileToConnect = ({ name, showName, changeName, changeCheckbox }) => {
//     const handleClick = () => {
//         changeCheckbox();
//     };

//     const handleSubmit = (text) => {
//         changeName(text);
//     };

//     return (
//         <>
//             <h3>This is PROFILE</h3>
//             <div className="profile-wrap">
//                 {showName && <span className="profile-name">{name}</span>}
//                 <button className="profile-btn" onClick={handleClick}>change show name</button>   {/* style={{margin: 10}} */}
//                 <Form onSubmit={handleSubmit} />
//             </div>
//         </>
//     );
// };

// const mapStateToProps = state => ({
//     name: state.profile.name,
//     showName: state.profile.showName,
// });

// const mapDispatchToProps = {
//     changeName: setName,
//     changeCheckbox: () => toggleCheckbox,
// };

// export const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileToConnect);