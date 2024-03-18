import React, { FC } from 'react'

type TTestProps={
    sectiosTitle: string;
    sectionUrl:string
}

const Test:FC<TTestProps> = ({sectiosTitle,sectionUrl}) => {
  return (
    <div>Test</div>
  )
}

export default Test