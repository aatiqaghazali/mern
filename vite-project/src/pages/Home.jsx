import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      hi i am Home
      <Link to={'/about'}> about us</Link>
      hi
    </div>
  )
}
