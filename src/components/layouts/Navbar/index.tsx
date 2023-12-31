/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./Navbar.module.css";
import { signIn, useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <Link href={"/"}>
        <div className="big">Navbar</div>
      </Link>

      <div className={styles.profile}>
        {data && data.user && (
          <>
            {data.user.fullname}
            {data.user.image && (
              <img
                className={styles.avatar}
                src={data.user.image}
                alt={data.user.fullname}
              />
            )}
          </>
        )}
        {data ? (
          <button className={styles.button} onClick={() => signOut()}>
            Sign out
          </button>
        ) : (
          <button className={styles.button} onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
