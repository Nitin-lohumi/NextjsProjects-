import { useState } from 'react';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // Sample data to search from
  const allData = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Alice Brown' },
    { name: 'Bob Johnson' },

  ];
  // Handle search input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    if (!query.trim()) {
      return;
    }

    setIsLoading(true);

    // Simulate fetching data (you can replace this with real API calls)
    setTimeout(() => {
      // Filter results based on the query
      const filteredResults = allData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      setIsLoading(false);
    }, 1000); // Simulate API delay
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search Page</h1>

      {/* Search Form */}
      <div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter search term"
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button onClick={handleSearch} style={{ padding: '10px 15px' }}>
          Search
        </button>
      </div>

      {/* Loading Indicator */}
      {isLoading && <p>Loading...</p>}

      {/* Display Search Results */}
      <div>
        {results.length === 0 && !isLoading && query.trim() && (
          <p>No results found</p>
        )}

        {results.length > 0 && !isLoading && (
          <ul>
            {results.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
