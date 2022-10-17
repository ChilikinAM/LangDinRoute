import {useParams} from "react-router-dom";

const Other = () => {
    const {lang} = useParams()
    return (
        <>
            <p>Other {lang}</p>
        </>
    )
}
export default Other