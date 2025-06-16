import React from 'react'

const RecruiterLogin = () => {
    const [state, setState] = React.useState('login')
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')

    const [image, setImage] = React.useState(false)

    const[istextDataSubmitted, setIsTextDataSubmitted] = React.useState(false)

  return (
    <div>
        Login Popup
    </div>
  )
}

export default RecruiterLogin