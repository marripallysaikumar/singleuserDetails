import UserProfile from './components/UserProfile/index'

const userDetails = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name: 'Rahul',
  role: 'software developer',
}

const App = () => <UserProfile userDetails={userDetails} />

export default App
