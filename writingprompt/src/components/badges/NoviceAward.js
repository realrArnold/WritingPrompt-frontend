import React from 'react'
import Image from 'next/image'

const NoviceAward = ({ opacity }) => {
  return (
       <div name="NoviceAward" className={opacity}>
                         <Image
                          src="/images/Novice_badge.svg"
                          height={360}
                          width={360}
                          alt="Green novice trophy with leaves and one star"
                          />
                          <p className="text-md text-justify font-semibold tracking-tight  px-6 pb-2">
                           You have written 10 times - daily practice is the key to success! 
                          </p>
                        </div>
  )
}

export default NoviceAward