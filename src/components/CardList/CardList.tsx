
import React from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList: React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <div>
        <Card companyName='META' ticker='FACEBOOK' price={150}/>
        <Card companyName='MICROSOFT' ticker='MSFT' price={1350}/>
        <Card companyName='NETFLIX' ticker='NFX' price={150}/>
    </div>
  )
}

export default CardList


