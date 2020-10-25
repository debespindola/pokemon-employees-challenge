import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { List, PageWrapper } from './style';

import Loading from '../../components/Loading';

import Card from '../../components/Card';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getEmployees = async () => {
    const { data } = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
    const mapedInformation = data.data.map((employee) => ({ name: employee.employee_name, id: employee.id }));

    console.log(data);
    setEmployees(mapedInformation);
    setIsLoading(false)
  };

  useEffect(() => {
    getEmployees();
    setIsLoading(true);
  }, []);

  return ( 
   <PageWrapper>
    {isLoading ? <Loading /> : (<List>
       {employees.map((each) => (
         <Card key={each.id} title={each.name}/>
       ))}
     </List>
    )
    }
   </PageWrapper>
  );
}
 
export default Employees;