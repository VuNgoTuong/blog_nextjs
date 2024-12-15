"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function Index() {
    const params = useParams()
  return (
    <div>
      <h1>page detail {params.reviewsId}</h1>
    </div>
  )
}
