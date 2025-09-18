const SortSelector = ({ sortBy, onSortChange }) => {
  return ( 
    <div className="controls">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={ sortBy } onChange={ (e) => onSortChange(e.target.value) } >
        <option value="market_cap_desc">Market Cap (High To Low)</option>
        <option value="market_cap_asc">Market Cap (Low to High)</option>
        <option value="price_desc">Price (High To Low)</option>
        <option value="price_asc">Price (Low to High)</option>
        <option value="change_desc">24 Change (High to Low)</option>
        <option value="change_asc">24 Change (Low to High)</option>
      </select>
    </div>
   );
}
 
export default SortSelector;