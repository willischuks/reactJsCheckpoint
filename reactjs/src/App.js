
import './App.css'
import CollapsibleExample from './Components/Navbar/Navbar'
import CardExample from './Components/Cards/Card'
import TextExample from './Components/Cards/Card1'
import KitchenSinkExample from './Components/Cards/Card2'
import FormBasicExample from './Components/Form/Form'


function App ()  {
    return(
        <>
        <div className="App">
            
            < CollapsibleExample />
            <h1>Grata Superni Portfolio</h1>
            <div className='container'>
                < CardExample />         
                < TextExample /> 
                < KitchenSinkExample />
                < FormBasicExample />   
            </div>       
        </div>
        </>
    )
}

export default App