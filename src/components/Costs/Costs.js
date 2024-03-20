import CostItem from './CostItem'
import Card from '../UI/Card'
import './Costs.css'
import CostFilter from './CostFilter'
import React, { useState } from 'react'

function Costs(props) {
	const [selectedYear, setSelectedYear] = useState('2021')

	const yearChangeHandler = year => {
		setSelectedYear(year)
	}

	const filteredCosts = props.costs.filter(cost => {
		return cost.date.getFullYear().toString() === selectedYear
	})

	let costsContent = <p>Расходов нет</p>

	if (filteredCosts.length > 0) {
		costsContent = filteredCosts.map(cost => (
			<CostItem
				key={cost.id}
				date={cost.date}
				description={cost.description}
				amount={cost.amount}
			/>
		))
	}

	return (
		<>
			<Card className='costs'>
				<CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
				{costsContent
                /* {filteredCosts.length === 0 && <p>Расходов нет</p>}
				{filteredCosts.length > 0 &&
					filteredCosts.map(cost => (
						<CostItem
							key={cost.id}
							date={cost.date}
							description={cost.description}
							amount={cost.amount}
						/>
					))} */}
			</Card>
		</>
	)
}

export default Costs
