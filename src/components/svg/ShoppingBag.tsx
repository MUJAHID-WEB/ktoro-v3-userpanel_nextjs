import React from 'react'

export default function ShoppingBag({fill = "#000", width = "26", height = "26"}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={width} height={height} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.33398 19.5006V7.6923L2.65482 4.06313C2.52843 3.7923 2.5194 3.51677 2.62773 3.23655C2.73607 2.95633 2.92565 2.75338 3.19648 2.62772C3.46732 2.50133 3.74285 2.48797 4.02307 2.58763C4.30329 2.6873 4.50623 2.87219 4.6319 3.1423L6.71732 7.63813H19.284L21.3694 3.1423C21.4958 2.87147 21.6991 2.68188 21.9793 2.57355C22.2595 2.46522 22.5347 2.48327 22.8048 2.62772C23.0756 2.7541 23.2652 2.95741 23.3736 3.23763C23.4819 3.51785 23.4729 3.79302 23.3465 4.06313L21.6673 7.6923V19.5006C21.6673 20.0965 21.4553 20.6067 21.0314 21.0314C20.6075 21.456 20.0972 21.668 19.5007 21.6673H6.50065C5.90482 21.6673 5.39493 21.4553 4.97098 21.0314C4.54704 20.6074 4.33471 20.0972 4.33398 19.5006ZM10.834 14.084H15.1673C15.4743 14.084 15.7317 13.98 15.9397 13.772C16.1477 13.564 16.2514 13.3069 16.2507 13.0006C16.2507 12.6937 16.1467 12.4366 15.9387 12.2293C15.7307 12.022 15.4735 11.918 15.1673 11.9173H10.834C10.527 11.9173 10.2699 12.0213 10.0627 12.2293C9.85537 12.4373 9.75137 12.6944 9.75065 13.0006C9.75065 13.3076 9.85465 13.565 10.0627 13.773C10.2707 13.981 10.5278 14.0847 10.834 14.084Z" fill={fill}/>
</svg>

  )
}