import { useState } from 'react'

function Registrate() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [gender, setGender] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await fetch('https://httpbin.org/post', {
				method: 'POST',
				body: JSON.stringify({
					name: name,
					email: email,
					phone: phone,
					gender: gender,
				}),
			})
			const resJson = await res.json()
			console.log(resJson)
			if (res.status === 200) {
				setName('')
				setEmail('')
				setMessage('User created successfully')
			} else {
				setMessage('Some error occured')
			}
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className='registrate'>
			<form onSubmit={handleSubmit}>
				<h2>Brukerregistrering</h2>
				<input
					type='text'
					value={name}
					placeholder='Name'
					onChange={(e) => setName(e.target.value)}
				/>

				<input
					list='browsers'
					placeholder='Gender'
					value={gender}
					onChange={(e) => setGender(e.target.value)}
				/>
				<datalist id='browsers'>
					<option value='Male'></option>
					<option value='Female'></option>
				</datalist>

				<input
					type='text'
					value={email}
					placeholder='Email'
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type='text'
					value={phone}
					placeholder='Phone'
					onChange={(e) => setPhone(e.target.value)}
				/>

				<button type='submit'>Create</button>

				<div className='message'>{message ? <p>{message}</p> : null}</div>
			</form>
		</div>
	)
}

export default Registrate
