import { Col, Row, Button, Input } from "antd";
import type { InputRef } from 'antd';
import { useRef } from "react";
import styles from './Signin.module.css'

export default function Signin() {

  const emailRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);

  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col span={12}>
            <img src="/bg_signin.png" alt="Signin" className={styles.signin_bg} />
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>My Books</div>
            <div className={styles.signin_subtitle}>Please Note Your Opinion</div>
            <div className={styles.signin_underline} />
            <div className={styles.email_title}>
              Email
              <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <Input
                placeholder="Email"
                autoComplete="email"
                name="email"
                className={styles.input}
                ref={emailRef} />
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <Input
                type="password"
                autoComplete="current-password"
                className={styles.input}
                ref={passwordRef}  />
            </div>
            <div className={styles.button_area}>
              <Button size="large" className={styles.button}>Sign In</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}