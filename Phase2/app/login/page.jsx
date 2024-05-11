"use client";
import { React, useState, useEffect, useRouter } from "react";
import styles from "@/public/css/login.module.css";
// import Footer from "@/app/api/components/footer/Footer";
// import NavBar from "@/app/api/components/nav/NavBar";
import Link from "next/link";

export default function Login() {
  async function handleLoginSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginDetails = Object.fromEntries(formData);
    const account = await fetch(`/api/login/${loginDetails.username}`)
    if(!account || account.password != loginDetails.password){
      alert("Failed to login. Please check your credentials and try again.");
    }
    else if(account.password == console.loginDetails.password){
      account.isLogged = true
      const response = await fetch(`/api/accounts/${account.accountNo}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(account)
    }
    )
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
