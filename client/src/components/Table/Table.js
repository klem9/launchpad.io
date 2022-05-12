import './table.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import { useState } from 'react';

function Table ({ data, render, headings }) {
  return (
    <ReactBootStrap.Table striped bordered hover>
    <thead>
      {headings.map((item,index)=>{
        return(
          <th>{item}</th>
        )
      })}
    </thead>
    <tbody>
        {data.map(render)}
    </tbody>
  </ReactBootStrap.Table>
    // <table>
    //   <thead>
    //     <tr>
    //       {column.map((item, index) => <TableHeadItem item={item} />)}
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((item, index) => <TableRow item={item} column={column} />)}
    //   </tbody>
    // </table>
  )
}

// const TableHeadItem = ({ item }) => <th>{item.heading}</th>
// const TableRow = ({ item, column }) => (
//   <tr>
//     {column.map((columnItem, index) => {

//       if(columnItem.value.includes('.')) {
//         const itemSplit = columnItem.value.split('.') //['address', 'city']
//         return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
//       }

//       return ( 
//       <td>
//       {item[`${columnItem.value}`]}
//       </td>
//       )
//     })}
//   </tr>
// )

export default Table