import { Button, Col, Row } from "antd";
import Input from "rc-input";

export default function Signin() {
  return (
    <Row align="middle">
      <Col span={24}>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <div>My Books</div>
            <div>Please Note Your Opinion</div>
            <div />
            <div>
              Email
              <span> *</span>
            </div>
            <div>
              <Input
                placeholder="Email"
                autoComplete="email"
                name="email" />
            </div>
            <div>
              Password
              <span> *</span>
            </div>
            <div>
              <Input
                type="password"
                autoComplete="current-password"
                name="email" />
            </div>
            <div>
              <Button size="large">Sign In</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}