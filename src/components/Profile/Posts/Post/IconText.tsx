import React from "react";
import { Space } from "antd";

export const IconText = ({
  icon,
  text,
  handleClick,
}: {
  icon: React.FC;
  text?: string;
  handleClick?: () => void;
}) => (
  <Space onClick={handleClick}>
    {React.createElement(icon)}
    {text && text}
  </Space>
);
