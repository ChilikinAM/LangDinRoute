import {useParams} from "react-router-dom";

const Main = () => {
    const {lang} = useParams()
    return (
        <>
            <p>Main {lang}</p>
        </>
    )
}
export default Main