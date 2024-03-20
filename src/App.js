
import React, {useState} from 'react'
import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'



const inCosts = [
    {
        id: 'c1',
        date: new Date(2022, 2, 12),
        description: 'Холодильник',
        amount: 999.99,
    },
    {
        id: 'c2',
        date: new Date(2021, 11, 25),
        description: 'MacBook',
        amount: 1254.72,
    },
    {
        id: 'c3',
        date: new Date(2021, 4, 1),
        description: 'Джинсы',
        amount: 49.99,
    },
]

function App() {
    

    const [costs, setCosts] = useState(inCosts)

    const addCostHandler = (cost) => {
        console.log(cost);
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        })
        console.log(costs)
    }



	return (
		<>
			<NewCost onAddCost={addCostHandler} />
			<Costs costs={costs} />
		</>
	)
}

export default App
