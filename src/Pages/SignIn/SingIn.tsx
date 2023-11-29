import { memo, lazy, Suspense } from "react";
import styles from "./SignIn.module.css";

const Auth = lazy(() => import("../../Components/Auth/Auth"));

function SignIn() {
  return (
    <div className={styles.SignInBody}>
      <Suspense>
        <Auth />
      </Suspense>
    </div>
  );
}

const SingInMemo = memo(SignIn);

export default SingInMemo;
