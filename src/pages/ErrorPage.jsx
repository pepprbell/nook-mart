import { Link } from "react-router-dom";
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className="error">
      <h1>앗! 페이지를 찾지 못했습니다.</h1>
      <Link to="/">
        <button>홈으로 돌아가기</button>
      </Link>
    </div>
  );
};

export default ErrorPage;