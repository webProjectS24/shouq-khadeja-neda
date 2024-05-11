"use client";
import { React, useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";

export default function page() {
  const accountNo = 170;
  const [items, setTransition] = useState([]);
  useEffect(() => {
    fetch(`/api/accounts/${accountNo}/transaction`)
      .then((res) => res.json())
      .then(setTransition);
  }, []);
  console.log(items);
  return (
    <>
      <div className={styles.top}>
        <h1 className={styles.h1}>History of Purchased Items</h1>
      </div>
      <div className={styles.products_container}>
        {items.map((item) => (
          <div className={styles.card} key="d">
            <div className={styles.product_info}>
              <img src={item.imageUrl} className={styles.image} />
              <h2 className={styles.product_title}>{item.name}</h2>
              <p className={styles.product_description}>{item.description}</p>
              <p>Currently Available: {item.quantity}</p>
              <p className={styles.product_price}>{item.price} QAR</p>
              <p className={styles.item_status}>
                Item Status: {item.quantity == 0 ? "Sold" : "Available"}
              </p>
              {/* <form class="hidden" id="id-${item.itemNo}">
            <label for="quantity">Update Quantity: </label>
            <input type="number" name="quantity" id="quantity"/>
            <input type="submit"/>
            </form> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
