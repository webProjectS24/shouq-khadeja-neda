"use client";
import { React, useState, useEffect, useRouter } from "react";
import styles from "@/public/css/login.module.css";
// import Footer from "@/app/api/components/footer/Footer";
// import NavBar from "@/app/api/components/nav/NavBar";
import Link from "next/link";
import { Montserrat_Alternates } from "next/font/google";

export default function Login() {
  // const router = useRouter();
  const [accounts, setAccunts] = useState([]);
  async function handleChange(e) {}

  const formData = new FormData(e.target);
  const account = Object.fromEntries(formData);

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ account }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alter("Login Successful");
    } else {
      alter("Login Failed, please try again with correct credentials");
    }
  }

  useEffect(() => {
    async function loadData() {
      const response = await fetch(`/api/login`);
      const accountsdata = await response.json();
      setAccunts(accountsdata);
    }
    loadData();
  }, [accountNo]);

  return (
    <>
      {/* <NavBar></NavBar> */}
      <body className={styles.body}>
        <div className={styles.loginContainer}>
          <form className={styles.form} onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <label htmlFor="Username">Username</label>
            <input
              id="Username"
              name="Username"
              required
              className={styles.username}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className={styles.password}
              onChange={handleChange}
            />
            <button type="submit" className={styles.loginBtn}>
              Login
            </button>
          </form>
        </div>
      </body>
      {/* <Footer></Footer> */}
    </>
  );
}
