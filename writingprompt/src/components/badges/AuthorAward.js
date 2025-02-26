import React from 'react'
import Image from 'next/image'

const AuthorAward = ({opacity}) => {
  return (
     <div name="authorAward" className={opacity}>
                          <Image
                          src="/images/Author_badge.svg"
                          height={360}
                          width={360}
                          alt="Green novice trophy with leaves and one star"
                          />
                        <p className="text-md text-justify font-semibold tracking-tight  px-6 pb-2">
                          More than 30 writings published. You are definitely an author...Keep up the good work!
                          </p>
                        </div>
  )
}

export default AuthorAward