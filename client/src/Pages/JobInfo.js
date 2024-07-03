import DefaultLayout from '../components/defaultLayout'
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {applyJob} from '../redux/actions/jobActions'
import { Tag } from 'antd';

function JobInfo() {
  const dispatch=useDispatch();
  const { jobs } = useSelector(state => state.jobsReducer)
  const match = useParams();

  const job = jobs.find(job => job._id == match.id)
  console.log(job)

  const userid = JSON.parse(localStorage.getItem('user'))._id



  //Apply Now 
  function applyNow(){
    dispatch(applyJob(job))
  }

  const appliedCandidates=job.appliedCandidates

  const alreadyApplied=appliedCandidates.find(candidate=>candidate.userid==userid)

  return (
    <div>
      <DefaultLayout>
        {job && (
          <div>

            <p><b>Title : </b>{job.title}</p>
            <p><b>Company : </b>{job.company}</p>

            <p><b>Small Description :</b> {job.smallDescription}</p>
            <p><b>Full Description :</b> {job.fullDescription}</p>
            <p><b>Skills Required : </b>{job.skillsRequired}</p>
            <p><b>Experience : </b>{job.experience}</p>
            <p><b>Minimum Qualification : </b>{job.minimumQualification}</p>

            <hr />
            <p><b>Salary Range : </b>{job.salaryFrom}-{job.salaryTo}</p>
            <p><b>Department : </b>{job.department}</p>
            <p><b>Company Profile : </b>{job.companyDescription}</p>
            <p><b>Total Candidates applied : </b>{job.appliedCandidates.length}</p>

            <hr />
            <div className='flex justify-content-between'>

              {job.postedBy == userid ? (<Link to={`/editjob/${job._id}`} > <button class="button-33">Edit Job</button></Link>) : alreadyApplied ? (<Tag color="green">Already Applied</Tag>) : ((<button onClick={applyNow} class="button-33">Apply Now</button>))
              }

              <p><b>Posted on {moment(job.createdAt).format('MMM DD yyyy')}</b></p>
            </div>

          </div>

        )}
      </DefaultLayout>
    </div>
  );
}

export default JobInfo;