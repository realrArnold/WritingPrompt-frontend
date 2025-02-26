import React from 'react'
import Image from 'next/image' 

const MasterAward = ({ opacity }) => {
  return (
    <div name="masterAward" className={opacity}>
                          <Image
                          src="/images/Master_badge.svg"
                          height={360}
                          width={360}
                          alt="Pink novice trophy with blue leaves and two stars"
                          />
                          <p className="text-md text-justify font-semibold tracking-tight  px-6 pb-2">
                          More than 100 writings published. Mastery is acheived through practice - well done!
                          </p>
                        </div>
  )
}

export default MasterAward