/* eslint-disable import/extensions */
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import logo from 'src/assets/logo.png'

import { logout } from '../logout'
import { userInfo } from '../store'

import s from './style.module.less'

export const Header: React.FC = observer(() => (
  <Layout.Header className={s.header}>
    <section className={s.logo}>
      <img src={logo} alt="logo" />
      <a href="/">project-react-ts</a>
    </section>
    <section className={s.right}>
      <span>
        <UserOutlined />
        {userInfo.value.user?.nickname || ''}
      </span>
      <Button type="link" onClick={logout}>
        <LogoutOutlined />
        注销
      </Button>
    </section>
  </Layout.Header>
))
