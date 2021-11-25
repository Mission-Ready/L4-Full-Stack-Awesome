import React from 'react'
import { useParams } from "react-router-dom";

export default function Post() {
  const params = useParams()
  
  return (
    <div>
      This page will show post number: {params.postID}
    </div>
  )
}
