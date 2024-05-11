"use client";
import { React, useState, useEffect, useRouter } from "react";
import styles from "@/public/css/login.module.css";
// import Footer from "@/app/api/components/footer/Footer";
// import NavBar from "@/app/api/components/nav/NavBar";
import Link from "next/link";
import { Montserrat_Alternates } from "next/font/google";

export default function Login() {
  // const router = useRouter();
  async function handleChange(e) {}
  async function handleLoginSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginDetails = Object.fromEntries(formData);

    try {
      const accountResponse = await fetch(
        `/api/login/${loginDetails.username}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!accountResponse.ok) {
        throw new Error("Failed to fetch account data");
      }

      const account = await accountResponse.json();
      console.log(account);

      if (!account || account.password !== loginDetails.password) {
        console.log("Login failed: Incorrect username or password");
      } else {
        // Update account information if login is successful
        account.isLogged = true;
        const response = await fetch(`/api/accounts/${account.accountNo}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(account),
        });

        if (!response.ok) {
          throw new Error("Failed to update account information");
        }

        console.log("Account updated successfully");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <>
      {/* <NavBar></NavBar> */}
      <body className={styles.body}>
        <div className={styles.loginContainer}>
          <form className={styles.form} onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
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
