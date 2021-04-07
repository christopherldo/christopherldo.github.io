import React from 'react'
import { PageBody } from './style';

const Component = props => {
  return (
    <PageBody>
      {props.child}
    </PageBody>
  );
};

export default Component;