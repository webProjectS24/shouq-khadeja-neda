'use client'
import {React, useState} from 'react'
import styles from '@/app/page.module.css'
import{ useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function page() {
  const searchParams = useSearchParams() 
    const router = useRouter()
    const [item, setItem] = useState(Object.fromEntries(searchParams))
    function handleChange(e) {
      const newItem = { ...item };
      newItem[e.target.name] = e.target.value;
      setItem(newItem);
  }
    async function handleSubmit(e) {
        e.preventDefault()
        item.sellerId = parseInt(item.sellerId)
        item.price = parseFloat(item.price)
        item.quantity = parseInt(item.quantity)
        item.sold = parseInt(item.sold)
        item.itemNo = parseInt(item.itemNo)
        setItem(item)
        console.log(item);
            const response = await fetch(`/api/accounts/sellers/${item.sellerId}/items/${item.itemNo}`,                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(item)
                }
            )
            router.push(`/sellers/items?accountNo=${item.sellerId}`)
    }
  return (
    <>
    <div className={styles.content}>
    <Link href={
                    {
                        pathname: `/sellers/items`,
                        query: {accountNo: item.sellerId}
                    }
                } className={styles.back_btn}>Back to Items History</Link>
    <div className={styles.upload}>
    <div className={styles.title}>
            <h1>Update an Item</h1>
        </div>
        <div className={styles.uploadForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <fieldset className={styles.fieldset}>
                <label htmlFor="name">Name of Item:</label>
                <input type="text" id="name" name="name" required className={styles.uploadInput} defaultValue={item.name}  onChange={handleChange}/>

                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" className={styles.uploadInput} required defaultValue={item.description}  onChange={handleChange}></textarea>

                <label htmlFor="price">Price in QR:</label>
                <input type="number" id="price" name="price" required className={styles.uploadInput} defaultValue={item.price}  onChange={handleChange}/>

                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" required className={styles.uploadInput} defaultValue={item.quantity}  onChange={handleChange}/>

                <label htmlFor="imageUrl">Image URL:</label>
                <input type="url" id="imageUrl" name="imageUrl" className={styles.uploadInput} required defaultValue={item.imageUrl}  onChange={handleChange}/>
      
            </fieldset>
            <div className={styles.form_btn}>
                <button type="submit" className={styles.uploadSubmit}>Submit</button>
            </div>
        </form>
        </div>
        </div>
        </div>
        </>
  )
}
