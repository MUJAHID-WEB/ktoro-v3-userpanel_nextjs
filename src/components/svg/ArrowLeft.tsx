import React from 'react'

export default function ArrowLeft({fill = "black", width = "24", height = "24"}: {fill?: string, width?: string, height?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width}><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" fill={fill}/></svg>
  )
}
