import { connect, useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form/Form";
import { setName, SET_NAME, toggleCheckbox } from "../../store/profile/actions";
import "./Profile.scss"

// export const Profile = () => {
//     const dispatch = useDispatch();
//     const state = useSelector(state => state);
//     console.log(state);
//     const handleClick = () => {
//         dispatch(toggleCheckbox);
//     };

//     const handleSubmit = (text) => {
//         dispatch(setName(text));
//     };

//     return (
//         <>
//             <h3>This is PROFILE</h3>
//             <div className="profile-wrap">
//                 {state.showName && <span className="profile-name">{state.name}</span>}
//                 <button className="profile-btn" onClick={handleClick}>change show name</button>   {/* style={{margin: 10}} */}
//                 <Form onSubmit={handleSubmit} />
//             </div>
//         </>
//     );
// };


const ProfileToConnect = ({ name, showName, changeName, changeCheckbox }) => {
    const handleClick = () => {
        changeCheckbox();
    };

    const handleSubmit = (text) => {
        changeName(text);
    };

    return (
        <>
            <h3>This is PROFILE</h3>
            <div className="profile-wrap">
                {showName && <span className="profile-name">{name}</span>}
                <button className="profile-btn" onClick={handleClick}>change show name</button>   {/* style={{margin: 10}} */}
                <Form onSubmit={handleSubmit} />
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    name: state.profile.name,
    showName: state.profile.showName,
});

const mapDispatchToProps = {
    changeName: setName,
    changeCheckbox: () => toggleCheckbox,
};

export const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileToConnect);