import { Link, useParams } from "react-router-dom";

export default function ArticleElement() {
  const params = useParams();

  // useEffrct(() => {
  //   HTTP - запрос за одной статьёй
  // }, [])

  return (
    <div>
      <Link to="/news">Back</Link>
      <h2>{params.newsId}</h2>
    </div>
  );
}
