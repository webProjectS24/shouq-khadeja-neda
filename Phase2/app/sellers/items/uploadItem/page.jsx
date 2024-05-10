'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import{ useSearchParams, useRouter } from 'next/navigation'

export default function page() {
    const searchParams = useSearchParams() 
    const queries = Object.fromEntries(searchParams) 
    const router = useRouter()
    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newItem = Object.fromEntries(formData)
            const response = await fetch(`/api/accounts/sellers/${queries.accountNo}/items`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newItem)
                }
            )
            router.push('/sellers/items')
    }
  return (
    <div className={styles.upload}>
    <div className={styles.title}>
            <h1>Upload an Item</h1>
        </div>
        <div className={styles.uploadForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <fieldset className={styles.fieldset}>
                <label for="name">Name of Item:</label>
                <input type="text" id="name" name="name" required className={styles.uploadInput}/>

                <label for="description">Description:</label>
                <textarea name="description" id="description" className={styles.uploadInput} required></textarea>

                <label for="price">Price in QR:</label>
                <input type="number" id="price" name="price" required className={styles.uploadInput}/>

                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" required className={styles.uploadInput}/>

                <label for="image">Image URL:</label>
                <input type="url" id="imageUrl" name="imageUrl" className={styles.uploadInput} required/>
                
            </fieldset>
            <div className={styles.form_btn}>
                <button type="submit" className={styles.uploadSubmit}>Submit</button>
            </div>
        </form>
        </div>
        </div>
  )
}
