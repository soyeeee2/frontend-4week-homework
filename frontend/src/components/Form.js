import React, { useState, useRef } from 'react';

const Form = () => {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		emailAddress: '',
		password: ''
	});

	const { firstName, lastName, emailAddress, password } = values;

	window.addEventListener('beforeunload', () => {
		localStorage.clear();
	});

	const emptyValueAlert = (e) => {
		const { value, parentNode, placeholder, classList } = e.target;
		const inputWrap = parentNode;
		const messageTag = inputWrap.querySelector('p');

		if (value === "") {
			//empty style
			classList.add('active');

			//없으면 create
			if (!messageTag) {
				const emptyMessageElement = document.createElement('p');
				emptyMessageElement.innerText = placeholder + " cannot be empty.";
				inputWrap.appendChild(emptyMessageElement);
			}
		} 
	}


	const handleOnchange = (e) => {
		const { id, value, parentNode } = e.target;
		setValues({
			...values,
			[id]: value
		});
		const inputWrap = parentNode;
		const messageTag = inputWrap.querySelector('p');
		if (messageTag) {
			inputWrap.removeChild(messageTag);
			inputWrap.childNodes[0].classList.remove('active');
		}
	}


	const handleSubmit = (e) => {
		e.preventDefault();
		//비어있으면 dney
		if (!firstName || !lastName || !emailAddress || !password) return;
		for (const key in values) {
			localStorage.setItem(key, values[key]);
		}
		resetValues();
	}

	const resetValues = () => {
		setValues({
			firstName: '',
			lastName: '',
			emailAddress: '',
			password: ''
		})
	}

	return (
		<form onSubmit={handleSubmit} className='bg-white px-32 py-24 rounded-md'>
			<div className='text-right italic text-red'>
				<input
					className='px-4 py-2 w-full'
					type="text"
					placeholder="First Name"
					id='firstName'
					value={firstName}
					onBlur={emptyValueAlert}
					onChange={handleOnchange}
				/>
			</div>
			<div className='text-right italic text-red'>
				<input
					className='px-4 py-2 w-full'
					type="text"
					placeholder="Last Name"
					id='lastName'
					value={lastName}
					onBlur={emptyValueAlert}
					onChange={handleOnchange}
				/>
			</div>
			<div className='text-right italic text-red'>
				<input
					className='px-4 py-2 w-full'
					type="text"
					placeholder="Email Address"
					id='emailAddress'
					value={emailAddress}
					onBlur={emptyValueAlert}
					onChange={handleOnchange}
				/>
			</div>
			<div className='text-right italic text-red'>
				<input
					className='px-4 py-2 w-full'
					type="text"
					placeholder="Password"
					id='password'
					value={password}
					onBlur={emptyValueAlert}
					onChange={handleOnchange}
				/>
			</div>
			<button type='submit'>submit</button>
		</form>

	);
};

export default Form;
