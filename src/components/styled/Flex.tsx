import { Flex } from "antd";
import styled from "styled-components";

export const PaddedFlex = styled(Flex)`
  padding: 24px;
`;

export const ResponsiveVerticalFlex = styled(Flex)`
  flex-direction: column;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;