import React from 'react'

export default function Return({fill = "#000", width = "24", height = "24"}: {fill?: string, width?: string, height?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill={fill}><path d="M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z"/></svg>
  )
}
