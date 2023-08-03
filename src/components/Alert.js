import React from 'react'

export default function alert(props) {
  return (
    <div className="alert alert-danger " role="alert">
       <strong>{props.alert.typ}</strong>{props.alert.msg}
    </div>
  )
}
