import React from 'react';

import { Card, Title } from './style';

function CardComponent({ title }) {
  return ( 
    <Card>
      <Title>{title}</Title>
    </Card>
   );
}
 
export default CardComponent;