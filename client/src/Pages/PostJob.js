import React, { useState } from 'react'
import DefaultLayout from '../components/defaultLayout'
import { Row, Col, Form, Tabs, Input, Select } from 'antd'
import { useDispatch } from 'react-redux'
import { postJob } from '../redux/actions/jobActions'
const { TabPane } = Tabs
const { Option } = Select


function PostJob() {

  const [jobInfo, setJobInfo] = useState({});
  const [activeTab, setActiveTab] = useState('0');
  const dispatch=useDispatch();


  function onFirstFormFinish(values) {
    setJobInfo(values);
    setActiveTab('1');
  }

  function onFinalFormFinish(values){
    const finalObj={... jobInfo, ...values};
    console.log(finalObj)
    dispatch(postJob(finalObj));
  }

  return (
    <div>
      <DefaultLayout>

        <Tabs defaultActiveKey='0' activeKey={activeTab}>
          <TabPane tab='Job Info' key='0'>

            <Form layout='vertical' onFinish={onFirstFormFinish}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item name='title' rules={[{ required: true }]} label='Title'>
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item name='department' rules={[{ required: true }]} label='Department'>
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item name='experience' rules={[{ required: true }]} label='Experience'>
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item name='salaryFrom' rules={[{ required: true }]} label='Salary From'>
                    <Input type='number' />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item name='salaryTo' rules={[{ required: true }]} label='Salary To'>
                    <Input type='number' />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>

                <Col lg={8} sm={24}>
                  <Form.Item name='skillsRequired' rules={[{ required: true }]} label='Skills'>
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item name='minimumQualification' rules={[{ required: true }]} label='Minimum Qualification'>
                    <Select>
                      <Option value='High School Diploma'>High School Diploma</Option>
                      <Option value='BA'>BA</Option>
                      <Option value='BTech'>BTech</Option>
                      <Option value='MA'>MA</Option>
                    </Select>

                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item name='smallDescription' rules={[{ required: true }]} label='Small Description'>
                    <Input.TextArea rows={3} />
                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item name='fullDescription' rules={[{ required: true }]} label='Full Description'>
                    <Input.TextArea rows={6} />
                  </Form.Item>
                </Col>

              </Row>

              <button class="button-30" type='submit'>Next</button>

            </Form>
          </TabPane>
          <TabPane tab='Company Info' key='1'>

            <Form layout='vertical' onFinish={onFinalFormFinish}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item name='company' rules={[{ required: true }]} label='Company Name'>
                    <Input />
                  </Form.Item>
                </Col>


                <Col lg={8} sm={24}>
                  <Form.Item name='email' rules={[{ required: true }]} label='Company Email'>
                    <Input />
                  </Form.Item>
                </Col>


                <Col lg={8} sm={24}>
                  <Form.Item name='phoneNumber' rules={[{ required: true }]} label='Phone Number'>
                    <Input />
                  </Form.Item>
                </Col>


                <Col lg={24} sm={24}>
                  <Form.Item name='companyDescription' rules={[{ required: true }]} label='Company Description'>
                    <Input.TextArea rows={3} /></Form.Item>

                </Col>
              </Row>

              <button class="button-30" type='submit' onClick={()=>{setActiveTab("0")}}>Prev</button>

              <button class="button-29">Post</button>

            </Form>

          </TabPane>
        </Tabs>
      </DefaultLayout>

    </div>
  )
}

export default PostJob
