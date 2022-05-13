import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Menu, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import Globe from '../Globe'

const LangDrop = () => {
  const [label, setLabel] = useState('EN')

  const menu = (
    <Menu
      items={[
        {
          label: 'EN',
          key: '0',
          onClick: event => setLabel(event.domEvent.currentTarget.innerText),
        },
        {
          label: 'UA',
          key: '1',
          onClick: event => setLabel(event.domEvent.currentTarget.innerText),
        },
        {
          label: 'HE',
          key: '3',
          onClick: event => setLabel(event.domEvent.currentTarget.innerText),
        },
      ]}
    />
  )

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <span onClick={e => e.preventDefault()}>
        <Space>
          <Globe />
          {label}
          <DownOutlined />
        </Space>
      </span>
    </Dropdown>
  )
}

export default LangDrop
