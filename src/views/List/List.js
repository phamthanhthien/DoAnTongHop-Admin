import React from 'react';

import GridContainer from '../../components/Grid/GridContainer';
import Branch from './Branch';
import Employees from './Employees';

export default function List() {
  return (
    <GridContainer>
      <Employees />
      <Branch />
    </GridContainer>
  );
}
