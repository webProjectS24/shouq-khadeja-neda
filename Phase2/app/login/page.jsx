"use client";
import { React, useState, useEffect, useRouter } from "react";
import styles from "@/public/css/login.module.css";
// import Footer from "@/app/api/components/footer/Footer";
// import NavBar from "@/app/api/components/nav/NavBar";
import Link from "next/link";

export default function Login() {
  // const searchParams = useSearchParams();
  // const queries = Object.fromEntries(searchParams);
  // console.log(queries);
  //const router = useRouter();

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginDetails = Object.fromEntries(formData);

    const url = new URL("/api/login/", window.location.href);
    url.searchParams.append("username", loginDetails.email);
    url.searchParams.append("password", loginDetails.password);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Assuming the API returns a URL to redirect on successful login
      const { url } = await response.json();
      router.push(url || "/dashboard"); // Redirect to dashboard or other route
    } else {
      alert("Failed to login. Please check your credentials and try again.");
    }
  }

  return (
    <>
      {/* <NavBar></NavBar> */}
      <body className={styles.body}>
        <div className={styles.loginContainer}>
          <form className={styles.form} onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <label htmlFor="email">Username</label>
            <input
              id="email"
              name="email"
              required
              className={styles.username}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className={styles.username}
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
