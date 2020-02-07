import React from 'react';

//STORYBOOK
// import { action } from '@storybook/addon-actions';

//COMPONENT
import { Title, Text } from '@components/index';

const TypographyPage = () => {
  return (
    <div>
      <h3 className="story-title">Typography Types</h3>
      <section>
        <h4 className="story-title">Titles</h4>
        <div className="m20">
          <div className="m20">
            <Title level="h1"> H1 Sample Title </Title>
          </div>
          <div className="m20">
            <Title level="h2"> H2 Sample Title </Title>
            <Title level="h2" color="cherry"> H2 Colored Title </Title>
          </div>
          <div className="m20">
            <Title level="h3"> H3 Sample Title </Title>
          </div>
          <div className="m20">
            <Title level="h4"> H4 Sample Title </Title>
          </div>
          <div className="m20">
            <Title level="h6"> H6 Sample Title </Title>
            <Title level="h6" disabled> H6 Disabled Title </Title>
          </div>
          <div className="m20">
            <Title level="h7"> H7 Sample Title </Title>
            <Title level="h7" color="cherry"> H7 Colored Title </Title>
            <Title level="h7" disabled> H7 Disabled Title </Title>
          </div>
        </div>
      </section>
      <section>
        <h4 className="story-title">Text</h4>
        <div className="m20">
          <div className="m20">
            <Text> Main Sample Text </Text>
            <Text type="bold"> Bold Sample Text </Text>
            <Text type="small"> Small Sample Text </Text>
          </div>
        </div>
      </section>
    </div>
  )
};

export default TypographyPage;