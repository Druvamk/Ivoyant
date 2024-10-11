import { Avatar, Col, Row, Typography } from "antd";
import { a1, a2, a3, a4 } from "../../data";
const { Text } = Typography;
export default function Helpers() {
  return (
    <Row align="middle" style={{ padding: "10px" }}>
      <Col>
        <Avatar src={a1} size="large" />
      </Col>
      <Col style={{ paddingLeft: "10px" }}>
        <Text strong>David Jones</Text>
        <br />
        <Text type="secondary">{"Graphics Designer"}</Text>
      </Col>
      <Col style={{ marginLeft: "auto" }}>
        <Text type="secondary">{""}</Text>
      </Col>
    </Row>
  );
}
// export function Helpers2() {
//   return (
//     <Row align="middle" style={{ padding: "10px" }}>
//       <Col>
//         <Avatar src={a3} size="large" />
//       </Col>
//       <Col style={{ paddingLeft: "10px" }}>
//         <Text strong>Jenifer Vintage</Text>
//         <br />
//         <Text type="secondary">{"Web Designer"}</Text>
//       </Col>
//       <Col style={{ marginLeft: "auto" }}>
//         <Text type="secondary">{""}</Text>
//       </Col>
//     </Row>
//   );
// }

// export function Helpers3() {
//   return (
//     <Row align="middle" style={{ padding: "10px" }}>
//       <Col>
//         <Avatar src={a2} size="large" />
//       </Col>
//       <Col style={{ paddingLeft: "10px" }}>
//         <Text strong>William Jem</Text>
//         <br />
//         <Text type="secondary">{"Developer"}</Text>
//       </Col>
//       <Col style={{ marginLeft: "auto" }}>
//         <Text type="secondary">{""}</Text>
//       </Col>
//     </Row>
//   );
// }

// export function Helpers4() {
//   return (
//     <Row align="middle" style={{ padding: "10px" }}>
//       <Col>
//         <Avatar src={a3} size="large" />
//       </Col>
//       <Col style={{ paddingLeft: "10px" }}>
//         <Text strong>David Jones</Text>
//         <br />
//         <Text type="secondary">{"Developer"}</Text>
//       </Col>
//       <Col style={{ marginLeft: "auto" }}>
//         <Text type="secondary">{""}</Text>
//       </Col>
//     </Row>
//   );
// }
// export function Helpers5() {
//   return (
//     <Row align="middle" style={{ padding: "10px" }}>
//       <Col>
//         <Avatar src={a4} size="large" />
//       </Col>
//       <Col style={{ paddingLeft: "10px" }}>
//         <Text strong>Stebin Ben </Text>
//         <br />
//         <Text type="secondary">{"Developer"}</Text>
//       </Col>
//       <Col style={{ marginLeft: "auto" }}>
//         <Text type="secondary">{"Leader"}</Text>
//       </Col>
//     </Row>
//   );
// }
