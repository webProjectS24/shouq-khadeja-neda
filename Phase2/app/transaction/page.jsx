"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";

export default function page() {
  const accountNo = 13;
  const [items, setTransition] = useState([]);
  useEffect(() => {
    fetch(`/api/accounts/${accountNo}/transaction`)
      .then((res) => res.json())
      .then((data) => setTransition(data));
  }, []);
  console.log(items);
  return (
    <>
      <div className={styles.top}>
        <h1 className={styles.h1}>History of Purchased Items</h1>
      </div>
      <div className={styles.products_container}>
        {items.map((item) => (
          <div className={styles.card} key="${item.itemNo}">
            <div className={styles.product_info}>
              <img alt=" " src={item.Item.imageUrl} className={styles.image} />
              <h2 className={styles.product_title}>{item.Item.name}</h2>
              <p className={styles.product_description}>
                {item.Item.description}
              </p>
              <p>Currently Available: {item.Item.quantity}</p>
              <p className={styles.product_price}>
                Price: {item.Item.price} QAR
              </p>
              <p className={styles.product_price}>
                Total price: {item.totalPrice} QAR
              </p>
              <p className={styles.item_status}>
                Item Status: {item.Item.quantity == 0 ? "Sold" : "Available"}
              </p>
              <p className={styles.product_price}>Date: {item.Date} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
