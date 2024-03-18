import React from 'react'

export default function ArrowDownBold({fill = "black", width = "24", height = "24"}: {fill?: string, width?: string, height?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" fill={fill}/></svg>
  )
}
