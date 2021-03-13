import React, {useContext} from 'react';
import EmployeeContext from "../../utils/EmployeeContext.js";
import DataBody from "../DataBody/DataBody.js";
import "../DataTable/DataTable.scss";

const DataTable = () => {
    const data = useContext(EmployeeContext);
    // Should console the labels for the table into an array
    // console.log(data.employeeState.profile);
    // console.log(data.employeeState.list);

    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th className="label">
                            Image
                        </th>
                        <th 
                            className="label"
                            style= {{cursor:'pointer'}}
                            onClick={data.handleSortName}
                        >
                            Name
                        </th >
                        <th 
                            className="label"
                            style= {{cursor:'pointer'}}
                            onClick={data.handleSortPhone}
                        >
                            Phone
                        </th>
                        <th 
                            className="label"
                            style= {{cursor:'pointer'}}
                            onClick={data.handleSortEmail}    
                        >
                            Email
                        </th>
                    </tr>
                </thead>
                <DataBody/>
            </table>
        </div>
    )
}

export default DataTable;
