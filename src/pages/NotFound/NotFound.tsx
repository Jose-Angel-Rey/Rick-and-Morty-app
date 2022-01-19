import { useNavigate } from "react-router-dom";
import Error from "../../components/Error/Error";
import { useEffect } from "react";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Not Found";
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <main>
      <Error />
      <span>try again later</span>
    </main>
  );
}
