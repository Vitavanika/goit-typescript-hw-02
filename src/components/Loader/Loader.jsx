import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.loaderContainer}>
      <ClipLoader color="#3f51b5" size={50} />
    </div>
  );
}

export default Loader;
