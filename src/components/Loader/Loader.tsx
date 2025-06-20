import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css"; 
import { ReactElement } from "react";

export default function Loader(): ReactElement {
  return (
    <div className={css.loaderContainer}>
      <ClipLoader color="#3f51b5" size={50} />
    </div>
  );
}
