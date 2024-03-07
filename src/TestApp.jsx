import TestHeader from './TestHeader.jsx'
import { Routes, Route, Link } from 'react-router-dom';
import TestHome from './TestHome.jsx';
import TestSubmain from './TestSubmain.jsx';
import TestNotFound from './TestNotFound.jsx';

function TestApp(){
    return (
        <>
            <h3>This is the TestApp component</h3>
            <nav>
                <ul>
                    <li><Link to="/">TestHome</Link></li>
                    <li><Link to="/Submain">Submain</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<TestHome />} />
                <Route path='/submain' element={<TestSubmain />} />
                <Route path="*" element={<TestNotFound />} />
            </Routes>
        </>
        
    )
}

export default TestApp;