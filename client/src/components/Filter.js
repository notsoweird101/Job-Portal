import Search from 'antd/es/input/Search'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    FilterOutlined,
  } from "@ant-design/icons";
import { Modal , Form, Input, Select} from 'antd';
import { searchJobs, sortJobs } from '../redux/actions/jobActions';

const {Option}=Select;
function Filter() {
    const dispatch=useDispatch()

    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function sort(values){
    dispatch(sortJobs(values))
    handleCancel()
  }

  return (
    <div className='flex'>
      <Search className='mainsearch' onSearch={(value)=>{dispatch(searchJobs(value))}}/>
      <FilterOutlined onClick={showModal}/>

      <Modal title="Filter By" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} closable={false}>
        <Form layout='vertical' onFinish={sort}>
            <Form.Item name='experience' label='Experience'>
                <Select>
                    <Option value={0}> Fresher</Option>
                    <Option value={1}> 1 Years</Option>
                    <Option value={2}> 2 Years</Option>
                    <Option value={3}> 3 Years</Option>
                    <Option value={4}> 4 Years</Option>
                    <Option value={5}> 5 Years</Option>
                </Select>
            </Form.Item>

            <Form.Item name='salary' label='Salary'>
                <Select>
                    <Option value={10000}> 10000+</Option>
                    <Option value={15000}> 15000+</Option>
                    <Option value={25000}> 25000+</Option>
                    <Option value={35000}> 35000+</Option>
                    <Option value={50000}> 50000+</Option>
                    <Option value={100000}> 100000+</Option>
                </Select>
            </Form.Item>
            <button class="button-30" type='submit' onClick={()=>{}}>Filter</button>
        </Form>
      </Modal>
    </div>
  )
}

export default Filter
