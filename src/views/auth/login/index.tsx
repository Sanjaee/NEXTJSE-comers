import React from "react";
import Link from "next/link";
import styles from "./Login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { query, push } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (even: any) => {
    even.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: even.target.email.value,
        password: even.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email atau Password salah");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("Email atau Password salah");
    }
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Login</h1>
      {error && <p className={styles.login__error}>{error}</p>}
      <div className={styles.login__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.login__form__item}>
            <label htmlFor="email" className={styles.login__form__item__label}>
              Email
            </label>
            <input
              className={styles.login__form__item__input}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className={styles.login__form__item}>
            <label
              htmlFor="password"
              className={styles.login__form__item__label}
            >
              Password
            </label>
            <input
              className={styles.login__form__item__input}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className={styles.login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <button
          className={styles.login__form__item__google}
          onClick={() =>
            signIn("google", {
              callbackUrl,
              redirect: false,
            })
          }
        >
          Masuk Degan Google
        </button>
      </div>
      <p className={styles.login__link}>
        Belum punya akun? Register <Link href="/auth/register">Disini</Link>
      </p>
    </div>
  );
};

export default LoginView;
