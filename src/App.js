import './App.css';
import Layout from "./pages/layout";
import Main from "./pages/main";
import Other from "./pages/other";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const App = () => {
    const [lang, setLang] = useState('ru')
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/${lang}/${window.location.pathname.substr(4)}`)
        }, [lang]
    )

    return (
          <>
              <Routes>
                  <Route path='/' element={<Navigate to={`/${lang}`} />} />
                  <Route path='/:lang' element={<Layout setLang={setLang} />}>
                      <Route index element={<Main />} />
                      <Route path='other' element={<Other />} />
                  </Route>
              </Routes>
          </>
  )
}

export default App
