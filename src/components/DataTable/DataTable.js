import React, {useContext} from 'react';
import EmployeeContext from "../../utils/EmployeeContext.js";
import DataBody from "../DataBody/DataBody.js";
import "../DataTable/DataTable.scss";
import Menu from "../Menu/Menu";

const DataTable = () => {
    const data = useContext(EmployeeContext);
    // Should console the labels for the table into an array
    // console.log(data.employeeState.profile);
    // console.log(data.employeeState.list);

    return (
        <>
            <Menu/>
            <div className="tableContainer">
                <table>
                    <thead>
                        <tr>
                            <th className="label">
                                Image
                            </th>
                            <th className="label">
                                Name
                            </th >
                            <th className="label">
                                Phone
                            </th>
                            <th className="label">
                                Email
                            </th>
                        </tr>
                    </thead>
                    <DataBody/>
                </table>
            </div>
        </>
    )
}

export default DataTable;
