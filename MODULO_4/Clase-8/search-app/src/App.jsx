import { Container, Form, InputGroup, Table } from 'react-bootstrap'
import './App.css'
import Input from './components/input'
import TableApp from './components/table'
import { data } from "./data";
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState('');

  console.log(data,'data');
  
  return (
      <div className='App'>
        <Container>
          <h1 className='text-center mt-4'>
            Formulario
          </h1>
          <Form action="">
            <InputGroup className='my-3'>
                <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Buscar Contacto' />
            </InputGroup>
        </Form>
        <Table>
            <thead>
                <tr>
                    <th>
                        Primer nombre
                    </th>
                    <th>
                        apellido
                    </th>
                    <th>
                        correo electronico
                    </th>
                    <th>
                        telefono
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.filter((item) =>{
                  console.log(item,'item');
                  
                    return search.toLowerCase() === '' 
                    ? item 
                    : item.first_name.toLowerCase().includes(search)
                }).map((item) => (
                    <tr key={item.id}>
                    <td>
                        {item.first_name}
                    </td>
                    <td>
                        {item.last_name}
                    </td>
                    <td>
                        {item.email}
                    </td>
                    <td>
                        {item.ip_address}
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
        </Container>
      </div>
 
  )
}

export default App
