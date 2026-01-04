
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Authprovider from './Context/Authprovider.jsx'
createRoot(document.getElementById('root')).render(
     <Authprovider >
 <App />
     </Authprovider>
        
 
)
