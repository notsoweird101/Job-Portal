import React, { useState } from 'react'
import DefaultLayout from '../components/defaultLayout'
import { Row, Col, Form, Tabs, Input } from 'antd'
import { useDispatch } from 'react-redux'
import { updateUser } from '../redux/actions/userActions'
const { TabPane } = Tabs;

function Profile() {
  const [activeTab, setActiveTab] = useState('1')
  const [personalInfo, setPersonalInfo] = useState()
  const dispatch = useDispatch()

  function onPersonalInfoSubmit(values) {
    setPersonalInfo(values)
    setActiveTab('2');
  }

  const user = JSON.parse(localStorage.getItem('user'))

  function onFinalFinish(values) {
    const finalObj = { ...personalInfo, ...values }
    console.log(finalObj)
    dispatch(updateUser(finalObj))
  }


  return (
    <div>
      <DefaultLayout>
        <Tabs defaultActiveKey="1" activeKey={activeTab}>
          <Tabs.TabPane tab="Personal Info" key="1">

            <Form layout='vertical' onFinish={onPersonalInfoSubmit} initialValues={user}>
              <Row gutter={15}>
                <Col lg={8} sm={24}>
                  <Form.Item label='First name' required rules={[{ required: true }]} name='firstName'><Input /></Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item label='Last name' required rules={[{ required: true }]} name='lastName'><Input /></Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item label='Email' required rules={[{ required: true }]} name='email'><Input /></Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item label='Mobile Number' required rules={[{ required: true }]} name='mobileNumber'><Input /></Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item label='portfolio' required rules={[{ required: true }]} name='portfolio'><Input /></Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item label='About' required rules={[{ required: true }]} name='about'><Input.TextArea rows={4} /></Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item label='Address' required rules={[{ required: true }]} name='address'><Input.TextArea rows={4} /></Form.Item>
                </Col>

              </Row>
              <button class="button-30" type='submit'>Next</button>
            </Form>

          </Tabs.TabPane>
          <Tabs.TabPane tab="Skills and Education" key="2">
            <Form initialValues={user} layout='vertical' rules={[{ required: true }]} onFinish={onFinalFinish}>
              <Row>
                <Col lg={24} sm={24}>

                  <Form.List name='education' >
                    {(education, { add, remove }) => (

                      <div>
                        {education.map((field, index) => (
                          <div className='row'>
                            <div className='col-sm-12 col md=12 col-lg-9'>
                              <Form.Item required {...field} label='Education' className=''>
                                <Input.TextArea rows={3} />
                              </Form.Item>
                            </div>
                            <div className='flex col-lg-2 col-md-3 col-sm-5' >
                              <button onClick={() => { add() }} className="button-28" type="button">+</button>
                              {index !== 0 && (<button onClick={() => { remove(index) }} class="button-28" type="button">-</button>)}
                            </div>
                          </div>

                        ))}
                      </div>
                    )}
                  </Form.List>
                </Col>

                <Col lg={24} sm={24}>

                  <Form.List name='skills' >
                    {(skills, { add, remove }) => (

                      <div>
                        {skills.map((field, index) => (
                          <div className='row'>
                            <div className='col-sm-12 col md=12 col-lg-9'>
                              <Form.Item required {...field} label='Skills' className=''>
                                <Input.TextArea rows={3} />
                              </Form.Item>
                            </div>
                            <div className='flex col-lg-2 col-md-3 col-sm-5' >
                              <button onClick={() => { add() }} className="button-28" type="button">+</button>
                              {index !== 0 && (<button onClick={() => { remove(index) }} class="button-28" type="button">-</button>)}
                            </div>
                          </div>

                        ))}
                      </div>
                    )}
                  </Form.List>

                </Col>

                <Col lg={24} sm={24}>

                  <Form.List name='projects' >
                    {(projects, { add, remove }) => (

                      <div>
                        {projects.map((field, index) => (
                          <div className='row'>
                            <div className='col-sm-12 col md=12 col-lg-9'>
                              <Form.Item required {...field} label='Project' className=''>
                                <Input.TextArea rows={3} />
                              </Form.Item>
                            </div>
                            <div className='flex col-lg-2 col-md-3 col-sm-5' >
                              <button onClick={() => { add() }} className="button-28" type="button">+</button>
                              {index !== 0 && (<button onClick={() => { remove(index) }} class="button-28" type="button">-</button>)}
                            </div>
                          </div>

                        ))}
                      </div>
                    )}
                  </Form.List>

                </Col>

                <Col lg={24} sm={24}>

                  <Form.List name='experience' >
                    {(experience, { add, remove }) => (

                      <div>
                        {experience.map((field, index) => (
                          <div className='row'>
                            <div className='col-sm-12 col md=12 col-lg-9'>
                              <Form.Item required {...field} label='Experience' className=''>
                                <Input.TextArea rows={3} />
                              </Form.Item>
                            </div>
                            <div className='flex col-lg-2 col-md-3 col-sm-5' >
                              <button onClick={() => { add() }} className="button-28" type="button">+</button>
                              {index !== 0 && (<button onClick={() => { remove(index) }} class="button-28" type="button">-</button>)}
                            </div>
                          </div>

                        ))}
                      </div>
                    )}
                  </Form.List>

                </Col>

              </Row>

              <div className='flex justify-content-between'>
                <button class="button-30" type='submit' onClick={() => { setActiveTab("1") }}>Prev</button>

                <button class="button-29" type='submit'>Update</button>
              </div>

            </Form>

          </Tabs.TabPane>
        </Tabs>
      </DefaultLayout>
    </div>
  )
}

export default Profile
