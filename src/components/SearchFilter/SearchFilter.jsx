import React, { useContext, useState } from 'react'
import { CustomContext } from '../../utils/Context';

const SearchFilter = () => {
	const { handleSubmit, product, startsForm } = useContext(CustomContext);
	const [search, setSearch] = useState(product)
	const [checked, setChecked] = useState(startsForm)
  return (
	<div>
	  <form  onSubmit={handleSubmit}>
          <input type="search" name="search" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
          <label style={{padding: '0 10px'}}>
				  <input type="checkbox" name='latest' checked={checked} onChange={(e) => setChecked(e.target.checked)} /> New only
          </label>
          <input type="submit" value={'Search'} />
        </form>
	</div>
  )
}

export default SearchFilter
