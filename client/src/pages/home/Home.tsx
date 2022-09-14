import Featured from '../../components/featured/Featured'
import Header from '../../layout/header/Header'
import Navbar from '../../layout/navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
      </div>
    </div>
  )
}

export default Home
