import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { apiUrl, FETCH_STATUSES } from "../../utils/constants";
import "../Profile/Profile.scss"
import "../Articles/Articles.scss"
import { getArticles } from "../../store/articles/action";
import { selectArticles, selectArticlesError, selectArticlesStatus } from "../../store/articles/selectors";
import {
    ChasingDots,
    Circle,
    CubeGrid,
    DoubleBounce,
    FadingCircle,
    FoldingCube,
    Pulse,
    RotatingPlane,
    ThreeBounce,
    WanderingCubes,
    Wave
} from 'better-react-spinkit'




export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticles);
    const error = useSelector(selectArticlesError);
    const status = useSelector(selectArticlesStatus);

    const sendRequest = () => {
        dispatch(getArticles());
    };

    //для автоматического отображения списка при переходе на страницу Articles
    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <>
            <h3>Articles</h3>

            <button onClick={sendRequest} className="profile-btn" style={{ marginLeft: 10 }}>Get</button>
            <div className="spinner">
                {status === FETCH_STATUSES.REQUEST && <Wave />}
            </div>
            {error && <h4>{error}</h4>}
            <ul className="article-ul">
                {articles.map((article) => (
                    <li className="article-li" key={article.id}>{article.title}</li>
                ))}
            </ul>
        </>
    );
};