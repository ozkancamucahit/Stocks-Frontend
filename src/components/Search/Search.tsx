

import React, { SyntheticEvent, useState } from 'react'

interface Props {}

const Search : React.FC<Props> = (props: Props) : JSX.Element => {
    const [Search, setSearch] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log('btn e :>> ', e);
    }

    
    const onClick = (e : /*SyntheticEvent*/ React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log('e :>> ', e);
    }
  return (
    <div>
        <input value={Search} placeholder='type to search' onChange={(e) => handleChange(e)}></input>
        <button onClick={(e) => onClick(e)} title='Click' >TEXT</button>
    </div>
  )
}

export default Search





