import React from 'react'

type SuccessProps = {
  dateStr: string
  success: string
}

export const Success = ({ dateStr, success }: SuccessProps) => {
  return (
      <div>{dateStr} / {success}</div>
  )
}
