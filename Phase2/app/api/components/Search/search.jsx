import React, { useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function page() {
  const [searchParams] = useSearchParams();
  const queries = Object.fromEntries(searchParams);
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`/api/accounts/sellers/${queries.accountNo}/items`);
      const data = await response.json();
      setSearchResults(data);
    };

    if (queries.accountNo) {
      fetchItems();
    }
  }, [queries.accountNo]); // Re-fetch items if accountNo changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `/api/accounts/sellers/<span class="math-inline">\{queries\.accountNo\}/items?search\=</span>{searchTerm}`
    );
    const data = await response.json();
    setSearchResults(data);
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search Items:</label>
        <input
          type="text"
          id="search"
          name="search"
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className={styles.search_results}>
          <h2>Search Results</h2>
          {searchResults.map((item) => (
            <div key={item.id} className={styles.search_item}>
              <p>{item.name}</p>
              <p>{item.description && item.description.substring(0, 50) + "..."}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
// import React, { useState } from 'react';

// export default function Search() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`/api/search?query=${query}`);
//       setResults(response.data);
//     } catch (error) {
//       console.error('Error searching for products:', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search for products..."
//       />
//       <button onClick={handleSearch}>Search</button>

//       <ul>
//         {results.map((product) => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }