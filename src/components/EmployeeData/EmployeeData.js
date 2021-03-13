import React, {useState, useEffect} from 'react';
import API from "../../utils/API.js";
import EmployeeContext from "../../utils/EmployeeContext.js";
// import Card from "../Card/Card.js";
import Navbar from "../Navbar/Navbar.js";
import Search from "../Search/Search.js"
import Menu from "../Menu/Menu.js";
import DataTable from "../DataTable/DataTable.js";

const EmployeeData = () => {
    const [employeeState, setEmployeeState] = useState({
        list: [],
        filterList: [],
        nameSort: false,
        emailSort: false,
        profile: [
            {label: "Image"},
            {label: "Name"},
            {label: "Phone"},
            {label: "Email"}
        ]
    })

    // Render 25 People
    useEffect(() => {
        API.getEmployee().then(res => {

            setEmployeeState({
                ...employeeState,
                list: res.data.results,
                filterList: res.data.results
            })
        })
    }, []);

    // Handles the search bar filter
    const handleSearch = (event) => { 
        setEmployeeState({
            ...employeeState,
            filterList: employeeState.list.filter(users => {
                let input = users.name.first.toLowerCase();
                return input.indexOf(event.target.value.toLowerCase()) !== -1;
            })
        })
    }

    // Sorting First Name from A-Z and Z-A
    const handleSortName = (event) => {
        const sortingName = employeeState.filterList.sort((a,b) => {
            if (!employeeState.nameSort) {
                // Sorts an array by case insensative sorting
                return a.name.first.localeCompare(b.name.first); 
            } else {
                return b.name.first.localeCompare(a.name.first); 
            } 
        })
        setEmployeeState({
            ...employeeState,
            filterList: sortingName,
            nameSort: !employeeState.nameSort
        })
        console.log(sortingName);
    }

    // Sorting Email from A-Z and Z-A
    const handleSortEmail = () => {
        const sortingEmail = employeeState.list.sort((a,b) => {
            if (!employeeState.emailSort) {
                return a.email.localeCompare(b.email);
            } else {
                return b.email.localeCompare(a.email); 
            } 
        })
        setEmployeeState({
            ...employeeState,
            filterList: sortingEmail,
            emailSort: !employeeState.emailSort
        })
        console.log("Click Email");
    }

    return (
        <EmployeeContext.Provider value={{employeeState, handleSearch, handleSortName, handleSortEmail}}>
            <div>
                <Navbar>
                    <Search/>
                    <Menu/>
                </Navbar>
                <div>
                    {employeeState.filterList.length > 0 ? <DataTable /> : <div></div>}
                </div>

                {/* {results.map ( employee => {
                    return (<Card
                    image={employee.picture.large}
                    name={`${employee.name.first} ${employee.name.last}`}
                    phone={employee.phone}
                    email={employee.email}
                    />)
                })}     */}
            </div>
        </EmployeeContext.Provider>
    );
};

export default EmployeeData;
