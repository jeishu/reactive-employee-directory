import React, {useContext} from 'react';
import EmployeeContext from "../../utils/EmployeeContext.js";
import DataBody from "../DataBody/DataBody.js";

const DataTable = () => {
    const data = useContext(EmployeeContext);
    console.log(data.profile);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {data.profile.map(({label}) => {
                            return (
                                <th>
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
