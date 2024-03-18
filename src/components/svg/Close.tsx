import React from 'react'

export default function Close({fill = "#000", width = "24", height = "24"}: {fill?: string; width?: string; height?: string;}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width}><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill={fill} /></svg>
  )
}
