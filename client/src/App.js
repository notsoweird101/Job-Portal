import './App.css';
import React, { useEffect } from 'react';
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AppliedJobs from './Pages/AppliedJobs';
import PostJob from './Pages/PostJob';
import Profile from './Pages/Profile';
import JobInfo from './Pages/JobInfo';

import HashLoader from "react-spinners/HashLoader";
import { useDispatch, useSelector } from 'react-redux';
import { loaderReducer } from './redux/reducers/loaderReducer';
import { getAlljobs } from './redux/actions/jobActions';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PostedJobs from './Pages/PostedJobs';
import Editjob from './Pages/EditJob';
import { getAllUsers } from './redux/actions/userActions';
import UserInfo from './Pages/UserInfo';

function App() {
  const { loader } = useSelector(state => state.loaderReducer)

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getAlljobs());
    dispatch(getAllUsers());
  }, [])


  return (
    <div>
      {/* If loader is true only then render it */}
      {(loader && <div className="sweet-loading text-center">
        <HashLoader color={'#001529'} />
      </div>)}

      <div className="App">
        <Router>
          <Routes>
            <Route path='/login' exact Component={Login} />
            <Route path='/register' exact Component={Register} />


            <Route path='/' element={<ProtectedRoute Protect={Home} />} />
            <Route path='/appliedjobs' element={<ProtectedRoute Protect={AppliedJobs} />} />
            <Route path='/postjob' element={<ProtectedRoute Protect={PostJob} />} />
            <Route path='/profile' element={<ProtectedRoute Protect={Profile} />} />
            <Route path='/jobs/:id' element={<ProtectedRoute Protect={JobInfo} />} />

            <Route path='/posted' element={<ProtectedRoute Protect={PostedJobs} />} />
            <Route path='/editjob/:id' element={<ProtectedRoute Protect={Editjob} />} />
            <Route path='/users/:id' element={<ProtectedRoute Protect={UserInfo} />} />
          </Routes>

        </Router>
      </div>
    </div>
  );
}

export default App;

//Implemented Protected Routes
export function ProtectedRoute(props) {
  const navigate = useNavigate()
  const { Protect } = props;
  let user = localStorage.getItem('user');
  if (!user) {
    navigate('/login')
  }

  else return (
    <div>
      <Protect />
    </div>
  )
}