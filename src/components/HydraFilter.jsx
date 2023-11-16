import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SecondCard from './SecondCard/SecondCard';

export default function Apartment() {
  const [apartmentList, setApartment] = useState([]);

  const fetchData = async () => {
    const result = await fetch('/apartment2.json');
    result.json().then(
      data => {
        setApartment(data.apartments);
      }
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row>
      {apartmentList.map(item => (
        <Col key={item.id} md={4}>
          <SecondCard data={item} />
       

        </Col>
      ))}
    </Row>
  );
}
