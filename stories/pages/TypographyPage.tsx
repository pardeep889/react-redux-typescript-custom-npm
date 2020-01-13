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
          <Title level="h1"> H1 Sample Text </Title>
        </div>
        <div className="m20">
          <Title level="h2"> H2 Sample Text </Title>
        </div>
        <div className="m20">
          <Title level="h3"> H3 Sample Text </Title>
        </div>
        <div className="m20">
          <Title level="h4"> H4 Sample Text </Title>
          <Title level="h4" disabled > H4 Sample Text </Title>
        </div>
      </section>
      <section>
        <h4 className="story-title">Main Text</h4>
        <div className="m20">
          <Text> Main Sample Text </Text>
        </div>
      </section>
    </div>
  )
};

export default TypographyPage;