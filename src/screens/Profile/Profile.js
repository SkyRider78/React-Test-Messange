import { child, onValue, set } from "firebase/database";
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form/Form";
import { logOut, userNameRef, userRef, userShowNameRef } from "../../services/firebase";
import { initProfileTrack, setName, setNameFB, setShowName, SET_NAME, stopProfileTrack, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import "./Profile.scss"

export const Profile = ({ onLogout }) => {
    const dispatch = useDispatch();

    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);
    const handleClick = () => {
        dispatch(setShowName(!showName));
    };

    const handleSubmit = (text) => {
        dispatch(setNameFB(text));
    };

    useEffect(() => {
        dispatch(initProfileTrack());

        return () => {
            dispatch(stopProfileTrack())
        };
    }, []);

    return (
        <>
            <h3>This is PROFILE</h3>
            <div className="profile-wrap">
                <button className="profile-btn" onClick={logOut}>LOGOUT</button>
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