import Profile from '../src/components/Profile/Profile';
import Statistics from '../src/components/Statistics/Statistics';
import FriendList from '../src/components/FriendList/FriendList';
import TransactionHistory from '../src/components/TransactionHistory/TransactionHistory';
import './App.css';

export default function App() {
	return (
		<div className="App">
			<Profile />
			<Statistics />
			<FriendList />
			<TransactionHistory />
		</div>
	);
}

// export default function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
//         		</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
//         		</a>
// 			</header>
// 		</div>
// 	);
// }

