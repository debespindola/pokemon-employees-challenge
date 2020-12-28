import React from 'react';

import { Card, Title, Qudrado } from './style';

function CardComponent({ title }) {
  return ( 
    <Card>
      <Title>{title}</Title>
    </Card>
   );
}
 
export default CardComponent;