import React, {useContext} from 'react';
import EmployeeContext from "../../utils/EmployeeContext.js";
import DataBody from "../DataBody/DataBody.js";
import "../DataTable/DataTable.scss";

const DataTable = () => {
    const data = useContext(EmployeeContext);
    console.log(data.profile);

    return (
        <div className="tableContainer">
            <table>
                <thead className="theadInfo">
                    <tr className="labelInfo">
                        {data.employeeState.profile.map(({label}) => {
                            return (
                                <th className="label">
                                    {label}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <DataBody/>
            </table>
        </div>
    )
}

export default DataTable;
