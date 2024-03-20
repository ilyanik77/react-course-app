import React, { useState } from 'react'
import './CostForm.css'

const CostForm = (props) => {
	// 1й способ
	const [inputName, setInputName] = useState('')
	const [inputAmount, setInputAmount] = useState('')
	const [inputDate, setInputDate] = useState('')

	const nameChangeHandler = event => {
		setInputName(event.target.value)
	}

	const amountChangeHandler = event => {
		setInputAmount(event.target.value)
	}

	const dateChangeHandler = event => {
		setInputDate(event.target.value)
	}

	// 2й способ
	// const [userInput, setUserInput] = useState({
	// 	inputName: '',
	// 	inputAmount: '',
	// 	inputDate: '',
	// })

	// const nameChangeHandler = event => {
	// 	// setUserInput({
	// 	//     ...userInput,
	// 	//     inputName: event.target.value
	// 	// })
	// 	setUserInput(previousState => {
	// 		return {
	// 			...previousState,
	// 			inputName: event.target.value,
	// 		}
	// 	})
	// }

	// const amountChangeHandler = event => {
	// 	setUserInput({
	// 		...userInput,
	// 		inputAmount: event.target.value,
	// 	})
	// }

	// const dateChangeHandler = event => {
	// 	setUserInput({
	// 		...userInput,
	// 		inputDate: event.target.value,
	// 	})
	// }

	const submitHandler = event => {
		event.preventDefault()

		const costData = {
			description: inputName,
			amount: inputAmount,
			date: new Date(inputDate),
		}

        props.onSaveCostData(costData)
        setInputName('');
        setInputAmount('');
        setInputDate('');
 
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-cost__controls'>
				<div className='new-cost__control'>
					<label>Название</label>
					<input type='text' value={inputName} onChange={nameChangeHandler} />
				</div>
				<div className='new-cost__control'>
					<label>Сумма</label>
					<input
						type='number'
                        value={inputAmount}
						min={0.01}
						step={0.01}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-cost__control'>
					<label>Дата</label>
					<input type='date' value={inputDate} min={'2019-01-01'} onChange={dateChangeHandler} />
				</div>
				<div className='new-cost__actions'>
					<button type='submit'>Добавить расход</button>
				</div>
			</div>
		</form>
	)
}

export default CostForm
