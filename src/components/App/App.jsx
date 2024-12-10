import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Counter from "../Counter/Counter";
import Greeting from "../Greeting/Greeting";
import News from "../../pages/News";
import ArticleElement from "../../pages/ArticleElement";
import PageNotFound from "../PageNotFound/PageNotFound";

export default function App() {
  return (  
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<div>домашняя</div>} />
          <Route path="counter" element={<Counter />} />
          <Route path="greeting" element={<Greeting />} />
          <Route path="news" element={<News />} />
          <Route path="news/:newsId" element={<ArticleElement />} />
          <Route path="*" element={<PageNotFound/>} />
        </Route>
      </Routes>
  );
}
