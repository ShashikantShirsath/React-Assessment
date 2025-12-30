import { useState } from 'react'
import { dateArray, strategyArray } from './data'
import ViewToggle from './components/ViewToggle'
import DateDropdown from './components/DateDropdown'
import StrategyList from './components/StrategyList'

function App() {

  const [selectedView, setSelectedView] = useState('Bullish');
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  return (
    <div className='container'>
      <ViewToggle
        selectedView={selectedView}
        onChange={setSelectedView}
      />

      <DateDropdown
        dates={dateArray}
        selectedDate={selectedDate}
        onChange={setSelectedDate}
      />

      <StrategyList
        view={selectedView}
        date={selectedDate}
        data={strategyArray}
      />
    </div>
  )
}

export default App
