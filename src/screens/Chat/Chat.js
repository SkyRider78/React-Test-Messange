import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { addMessage, addMessageWithReply } from "../../store/messages/actions";
import { selectMessages, selectMessagesByChatId } from "../../store/messages/selectors";
import { AUTHORS } from "../../utils/constants";

export function Chat() {
    const { id } = useParams();

    const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
    const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    // let timeout =useRef();
    // const wrapperRef = useRef();

    const sendMessage = (text) => {
        dispatch(
            addMessageWithReply({
                author: AUTHORS.human,
                text: text,
                id: `msg-${Date.now()}`,
            },
                id
            )
        );
    };

    //робот
    // useEffect(() => {
    //     let timeout;
    //     const lastMessage = messages?.[messages?.length - 1];
    //     if (lastMessage?.author === AUTHORS.human) {
    //         timeout = setTimeout(() => {
    //             dispatch(
    //                 addMessage({
    //                     author: AUTHORS.robot, text: "hello!", id: `msg-${Date.now()}`,
    //                 }, id
    //                 ));
    //         }, 1000);
    //     }

    //     return () => {  //для чистки памяти
    //         clearTimeout(timeout);
    //     };
    // }, [messages]);

    if (!messages) {
        return <Navigate to="/chat" replace />
    }

    return (
        <div className="App wrap">
            <div className='wrap-chat'>
                <MessageList messages={messages} />
                <Form onSubmit={sendMessage} />
            </div>
        </div>
    );
}