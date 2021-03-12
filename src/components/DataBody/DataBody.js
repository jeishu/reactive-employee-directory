import React, {useContext} from 'react';
import EmployeeContext from "../../utils/EmployeeContext.js";

const DataBody = () => {
    const data = useContext(EmployeeContext);

    return (
        <tbody>
           {data.filterList[0] !== undefined && data.filterList[0].name !==undefined ? (
               data.filterList.map(({picture, name, phone, email}) => {
                   return (
                       <tr>
                           <td data-th="Image">
                               <img
                                    src={picture.large}
                                    alt={`image for ${name.first} ${name.last}`}
                                />
                            </td>
                            <td data-th="Name">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Phone">
                                {phone}
                            </td>
                            <td data-th="Email">
                                {email}
                            </td>
                        </tr>
                   )
               })) : ( <></> )}
        </tbody>
    )
}

export default DataBody;