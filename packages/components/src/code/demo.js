const React = require("react");
const Code = require(".");
const styled = require("styled-components").default;
const Themer = require("../demo-themer");

module.exports.default = function CodeDemo() {
  return (
    <Themer>
      <StyledDemoBox>
        <Code language="js">const foo = bar</Code>
      </StyledDemoBox>
    </Themer>
  );
};

const StyledDemoBox = styled.div`
   {
    margin: 10px 0 0 10px;
  }
`;
