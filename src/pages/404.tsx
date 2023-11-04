/* eslint-disable @next/next/no-img-element */
import style from "@/styles/404.module.scss";
import Link from "next/link";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <Link href="/">
      <div className={style.error}>
        <Image
          src={"/E.gif"}
          alt="404"
          className={style.error__img}
          width={100}
          height={100}
        />
        <div>404 | Halaman Tidak Ditemukan</div>
      </div>
    </Link>
  );
};

export default ErrorPage;
