

import React, { FormEvent, SyntheticEvent, useState } from 'react'

interface Props {
  onClick : (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  search: string | undefined;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search : React.FC<Props> = ({onClick, search, handleChange}: Props) : JSX.Element => {

  return (
    <div>
        <input value={search} placeholder='type to search' onChange={(e) => handleChange(e)}></input>
        <button onClick={(e) => onClick(e)} title='Click' >TEXT</button>
    </div>
  )
}

export default Search





