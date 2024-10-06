import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, Tooltip } from "antd";
import { useState } from "react";

function A1(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  function handleClickButton(): void {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <Flex gap={"50px"}>
      <Button type="primary">Primary button</Button>
      <Button type="default">Default button</Button>
      <Button icon={<DownloadOutlined />}>Download</Button>
      <Button type="primary" loading={loading} onClick={handleClickButton}>
        Loading....
      </Button>
      <Divider />
      <Flex gap="small" wrap>
        <Tooltip title="Tooltip text">
          <Button type="primary" shape="round" icon={<SearchOutlined />}>
            Primary button
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
}

export default A1;
