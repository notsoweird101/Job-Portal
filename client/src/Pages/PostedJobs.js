import React, { useState } from 'react'
import {
  EditOutlined,
  OrderedListOutlined,
} from '@ant-design/icons';
import DefaultLayout from '../components/defaultLayout'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Modal, Table } from 'antd';
import moment from 'moment';
import { Link, useNavigate } from "react-router-dom"
import ColumnGroup from 'antd/es/table/ColumnGroup';


function PostedJobs() {
  const navigate = useNavigate();
  const allusers = useSelector((state) => state.usersReducer).users;

  const user = JSON.parse(localStorage.getItem("user"))
  const alljobs = useSelector((state) => state.jobsReducer).jobs;

  const userid = user._id;

  const userPostedJobs = alljobs.filter((job) => job.postedBy == userid);

  // Modal Hook
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState()

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Posted On",
      dataIndex: "postedOn",
    },
    {
      title: "Total Candidates",
      dataIndex: "appliedCandidates",
    },
    {
      title: 'Actions',
      render: (text, data) => {
        return (
          <div className='flex'>

            <EditOutlined style={{ fontSize: 20 }} onClick={() => {
              navigate(`/editjob/${data.completeJobData._id}`)
            }} />

            <OrderedListOutlined style={{ fontSize: 20 }} onClick={() => { showModal(data.completeJobData) }} />
          </div>
        )
      }
    }
  ];

  const dataSource = []

  for (var job of userPostedJobs) {
    var obj = {
      title: job.title,
      company: job.company,
      postedOn: moment(job.createdAt).format("MMM DD yyyy"),
      appliedCandidates: job.appliedCandidates.length,
      completeJobData: job
    };
    dataSource.push(obj);
  }

  // Modal Handle functions
  const showModal = (job) => {
    setIsModalOpen(true);
    setSelectedJob(job);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function CandidatesList() {

    const candidatesColumns = [
      {
        title: 'Candidate ID',
        dataIndex: "candidateId",
        render: (text, data) => {
          return <Link to={`/users/${data.candidateId}`}>{data.candidateId}</Link>
        }
      },
      {
        title: "Full Name",
        dataIndex: "fullName",
      },
      {
        title: "Applied Date",
        dataIndex: "appliedDate",
      }
    ]

    var candidatesDataSource = [];

    
    for (var candidate of selectedJob.appliedCandidates) {
      var user = allusers.find((user) => user._id == candidate.userid);
      
      var obj = {
        candidateId: user._id,
        fullName: user.firstName + " " + user.lastName,
        appliedDate: candidate.appliedDate,
      };
      candidatesDataSource.push(obj)
    }



    return (
      <Table columns={candidatesColumns}
        dataSource={candidatesDataSource} />
    )

  }

  return (
    <div>
      <DefaultLayout>
        <h1>Posted Jobs</h1>

        <Table columns={columns} dataSource={dataSource} />

        <Modal title="Candidates Applied" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800} closable={false}>
          <CandidatesList />
        </Modal>

      </DefaultLayout>
    </div>
  )
}

export default PostedJobs
