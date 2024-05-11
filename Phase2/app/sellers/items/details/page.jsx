"use client";
import { React, useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function page() {
  const searchParams = useSearchParams(); //map
  const queries = Object.fromEntries(searchParams); //object
  const [item, setItem] = useState({});
  const [buyers, setBuyers] = useState([]);
  useEffect(() => {
    console.log("hello");
    fetch(`/api/accounts/sellers/${queries.accountNo}/items/${queries.itemNo}`)
      .then((res) => res.json())
      .then(setItem);
  }, []);
  useEffect(() => {
    fetch(
      `/api/accounts/sellers/${queries.accountNo}/items/${queries.itemNo}/buyers`
    )
      .then((res) => res.json())
      .then(setBuyers);
  }, []);
  // const buyers = await accountRepo.getBuyers(item.itemNo)
  // console.log(buyers);
  return (
    <>
      <div className={styles.content}>
        <Link
          href={{
            pathname: `/sellers/items`,
            query: { accountNo: queries.accountNo },
          }}
          className={styles.back_btn}
        >
          Back to Items History
        </Link>
        <div className={styles.itemDetails}>
          <div className={styles.details}>
            <img
              src={item.imageUrl}
              alt="Item 1"
              className={styles.details_image}
            />
            <div className={styles.details_content}>
              <h2 className={styles.title}>{item.name}</h2>
              <p>Description: {item.description}</p>
              <p>Price of item: {item.price}</p>
              <p>Available: {item.quantity}</p>
              <p>{item.quantity == 0 ? "Sold" : "On Sale"}</p>
              <h3 className={styles.sale_history_title}>Sale History</h3>
              <h4>Total number of items sold: {item.sold}</h4>
              <h4>Buyers</h4>
              {buyers.length == 0 ? (
                <p>No Buyers</p>
              ) : (
                <ol className={styles.saleHistory}>
                  {buyers.map((buyer) => (
                    <li>
                      <b>Buyer:</b> {buyer.customer.account.username} <br></br>
                      <b>Total Price:</b> {buyer.totalPrice}
                      <br></br>
                      <b>Date Purchased:</b> {buyer.Date}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
