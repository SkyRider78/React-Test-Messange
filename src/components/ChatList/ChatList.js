import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { addChat, deleteChat } from "../../store/chats/action";
import { selectChats } from "../../store/chats/selectors";
import { clearMessages, initMessagesForChat } from "../../store/messages/actions";
import { Form } from "../Form/Form";
import "./ChatList.scss";


export const ChatList = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };
        dispatch(addChat(newChat));
        dispatch(initMessagesForChat(newChat.id));
    };

const handleRemoveChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(clearMessages(id));
}

    return (
        <>
            <div className="chat-list">
                {chats.map((chat) => (
                    <div key={chat.id}>
                        <Link to={`/chat/${chat.id}`}>
                            {chat.name}
                        </Link>
                        <span className="chat-list-del" onClick={() => handleRemoveChat(chat.id)}>
                            -
                        </span>
                    </div>
                ))}
            </div>
            <div className="chat-list-submit">
                <Form onSubmit={handleSubmit} />
            </div>
            <Outlet />
        </>
    )
};