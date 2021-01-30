import React, { Component } from 'react';
import api from './api';
import { Table,Button } from 'reactstrap';
import { IoIosLink } from 'react-icons/io';



class App extends Component{


  state = {
    Produtos: [],
  };


  async componentDidMount(){
    const response = await api.get('');

    console.log(response.data)

    this.setState({ Produtos: response.data.produtos});
  }

  render(){

    const { Produtos }= this.state;

    return(
      <div>
      <Table striped>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Preço</th>
          <th>Link</th>

        </tr>
      </thead>
      <tbody>
        { (Produtos.length > 0) ? Produtos.filter(produto => produto.status == 'ativo').map( (produto, index) => {
           return (
            <tr key={ index }>
              
              <td>{ produto.nome }</td>
              <td>{ produto.preco}</td>
              <td>
                <a href={produto.link} ><IoIosLink size={28} /></a>
              </td>

            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </Table>

    
      

      </div>
    )
  }
}
export default App;
