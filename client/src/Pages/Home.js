import React, { useEffect } from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/defaultLayout'
import { getAlljobs } from '../redux/actions/jobActions';
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

function Home() {
  const { jobs } = useSelector(state => state.jobsReducer)
  //Jobs data -> complete initial state, jobs->array within

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlljobs());
  }, [])

  return (
    <div>
      <DefaultLayout>
        <Row gutter={16}>
          {jobs.map(job => {
            return <Col lg={12} sm={24}>
              <div className='job-div bs m-2 p-2'>
                <h4>{job.title}</h4>
                <p>{job.company}</p>
                <hr/>
                <p>{job.smallDescription}</p>

                <div className='flex'>
                <p>Salary : <b>{job.salaryFrom} - {job.salaryTo}</b></p>
                 <p className='ml-5'>Experience : <b>{job.experience} Years</b></p>
                </div>
                <hr/>

                <div className='flex justify-content-between'>
                <Link to={`/jobs/${job._id}`}><button class="button-71" 
                role="button">View</button></Link>
             
                <p>Posted on : {moment(job.createdAt).format('MMM DD yyy')}</p>
                </div>
                
              </div>
            </Col>
          })}
        </Row>


      </DefaultLayout>
    </div>
  )
}

export default Home
