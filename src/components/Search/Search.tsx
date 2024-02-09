

import React, { useState } from 'react'

interface Props {}

const Search : React.FC<Props> = (props: Props) : JSX.Element => {
    const [Search, setSearch] = useState<string>("");

    const onclick = (e: any) => {
        setSearch(e.target.value);
        console.log('btn e :>> ', e);
    }

  return (
    <div>
        <input value={Search} placeholder='type to search' onChange={(e) => onclick(e)}></input>
    </div>
  )
}

export default Search





