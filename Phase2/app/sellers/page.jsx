import React from 'react'
import styles from '@/app/page.module.css'
import accountRepo from '../repo/accountRepo'

export default async function page() {
  const items = await accountRepo.getItemsOfSeller(170)
  return (
    <>
        <div className={styles.top}>
        <h1 className={styles.h1}>History of Uploaded Items</h1>
        <button id={styles.upload_items}>Upload Item</button>
        </div>
        <div className={styles.products_container}>
        {items.map(item => 
        <div className={styles.card}>
        <div className={styles.product_info}>
        <img src={item.imageUrl} className={styles.image}/>
            <h2 className={styles.product_title}>${item.name}</h2>
            <p className={styles.product_description}>${item.description}</p>
            <p>Currently Available: ${item.quantity}</p>
            <p className={styles.product_price}>${item.price} QAR</p>
            <p className={styles.item_status}>Item Status: ${
              item.quantity == 0 ? "Sold" : "Available"
            }</p>
            {/* <form class="hidden" id="id-${item.itemNo}">
            <label for="quantity">Update Quantity: </label>
            <input type="number" name="quantity" id="quantity"/>
            <input type="submit"/>
            </form> */}
        </div>
        <div className={styles.product_btns}>
        <a className={styles.item_button} href="./itemDetails.html?itemNo=${item.itemNo}&accountNo=${accountNo}">View Details</a>
        <a className={styles.item_button} onclick="update(${item.itemNo})">Update Quantity</a>
        </div>
    </div>
        )}
            </div>
    </>
  )
}
