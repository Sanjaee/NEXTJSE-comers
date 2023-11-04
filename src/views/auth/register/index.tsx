import React from "react";
import Link from "next/link";
import styles from "./register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const handleSubmit = async (even: any) => {
    even.preventDefault();
    setError("");
    setIsLoading(true);
    const data = {
      email: even.target.email.value,
      password: even.target.password.value,
      fullname: even.target.fullname.value,
    };

    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      even.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(
        result.status === 400 ? "Email sudah terdaftar" : "Terjadi kesalahan"
      );
    }
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>
      {error && <p className={styles.register__error}>{error}</p>}
      <div className={styles.register__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.register__form__item}>
            <label
              htmlFor="email"
              className={styles.register__form__item__label}
            >
              Email
            </label>
            <input
              className={styles.register__form__item__input}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className={styles.register__form__item}>
            <label
              htmlFor="fullname"
              className={styles.register__form__item__label}
            >
              Fullname
            </label>
            <input
              className={styles.register__form__item__input}
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Fullname"
            />
          </div>
          <div className={styles.register__form__item}>
            <label
              htmlFor="password"
              className={styles.register__form__item__label}
            >
              Password
            </label>
            <input
              className={styles.register__form__item__input}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className={styles.register__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
      <p className={styles.register__link}>
        Sudah punya akun? Login <Link href="/auth/login">Disini</Link>
      </p>
    </div>
  );
};

export default RegisterView;
