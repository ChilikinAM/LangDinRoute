import {Link, Outlet, useParams} from "react-router-dom";

const Layout = ({setLang}) => {

    const {lang} = useParams()

    return (
        <>
            <header>
                <button onClick={() => setLang("ru")}>RU</button>
                <button onClick={() => setLang("en")}>EN</button>
                <button onClick={() => setLang("kg")}>KG</button>
                <Link to={`/${lang}/`}>Main</Link>
                <Link to={`/${lang}/other`}>Other</Link>
            </header>

            <Outlet />
        </>
    )
}
export default Layout