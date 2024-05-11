'use client'
import {React, useState, useEffect} from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import styles from '@/app/page.module.css'

export default function page() {
    const searchParams = useSearchParams() 
    const queries = Object.fromEntries(searchParams) 
    const accountNo = queries.accountNo
    const [totalUploadedItems, setTotalUploadedItems] = useState(0);
    const [mostBoughtItem, setMostBoughtItem] = useState({});
    const [averagePriceOfItems, setAveragePriceOfItems] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [topThreeSellingItems, setTopThreeSellingItems] = useState([]);
    const [productsNeverSold, setProductsNeverSold] = useState([]);
  
    useEffect(() => {
      async function loadData() {

        const totalUploadedItemsResponse = await fetch(`/api/accounts/sellers/${accountNo}/statistics/totalUploadedItems`)
        const totalUploadedItemsData =  await totalUploadedItemsResponse.json()
        setTotalUploadedItems(totalUploadedItemsData)
  
        const mostBoughtItemResponse = await fetch(`/api/accounts/sellers/${accountNo}/statistics/mostBoughtItem`)
        const mostBoughtItemData =  await mostBoughtItemResponse.json()
        setMostBoughtItem(mostBoughtItemData)

  
        const averagePriceOfItemsResponse = await fetch(`/api/accounts/sellers/${accountNo}/statistics/averagePriceOfItems`)
        const averagePriceOfItemsData = await averagePriceOfItemsResponse.json()
        setAveragePriceOfItems(averagePriceOfItemsData._avg.price);
  
        const totalRevenueResponse = await fetch(`/api/accounts/sellers/${accountNo}/statistics/totalRevenue`)
        const totalRevenueData = await totalRevenueResponse.json()
        setTotalRevenue(totalRevenueData._sum.totalPrice);
  
        const topThreeSellingItemsResponse = await fetch(`/api/accounts/sellers/${accountNo}/statistics/threeBestSelling`)
        const topThreeSellingItemsData= await topThreeSellingItemsResponse.json()
        setTopThreeSellingItems(topThreeSellingItemsData);
  
        const productsNeverSoldResponse = await fetch(`/api/accounts/sellers/${accountNo}/statistics/itemNeverSold`)
        const productsNeverSoldData = await productsNeverSoldResponse.json()
        setProductsNeverSold(productsNeverSoldData);
      }
      loadData()
    }, [accountNo])
  
    return (
        <>
      <div className={styles.content}>
      <Link href='/sellers/items' className={styles.back_btn}>Back to Items History</Link>
        <h1>Statistics</h1>
        <div className={styles.statisticsData}>
          <h2>Total Number of Uploaded Products: {totalUploadedItems}</h2>
          <h2>Most Bought Product: {mostBoughtItem ? mostBoughtItem.name : "Not Available"} (bought {mostBoughtItem.sold} times)</h2>
          <h2>Average Price of Items: {averagePriceOfItems} QAR</h2>
          <h2>Total Revenue: {totalRevenue} QAR</h2>
          <h2>Top Three Selling Items:</h2>
          <ul>
            {topThreeSellingItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
          <h2>Products Never Sold:</h2>
          <ul>
            {productsNeverSold.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>

      </div>
      </div>
    
    </>
    )
  }