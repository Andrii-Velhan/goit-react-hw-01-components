import statisticalData from '../../bd/statistical-data.json'
// import ReactDOM from 'react-dom';

export default function Statistics({ title, stats }) {
	return (
		<Statistics title="Upload stats" stats={statisticalData} />
		<Statistics stats={statisticalData} />
	)
}