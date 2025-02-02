import DataGrid, { Column, FilterRow, HeaderFilter, Paging } from "devextreme-react/data-grid"
import "devextreme/dist/css/dx.light.css"

const userData = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", age: 29, role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", age: 34, role: "Editor" },
    { id: 3, name: "Sam Johnson", email: "sam.johnson@example.com", age: 25, role: "Viewer" },
    { id: 4, name: "Chris Lee", email: "chris.lee@example.com", age: 41, role: "Admin" },
    { id: 5, name: "Patricia Brown", email: "patricia.brown@example.com", age: 30, role: "Editor" },
    { id: 6, name: "Patricia Brown", email: "patricia.brown@example.com", age: 30, role: "Editor" },
    { id: 7, name: "Patricia Brown", email: "patricia.brown@example.com", age: 30, role: "Editor" },
    { id: 8, name: "Patricia Brown", email: "patricia.brown@example.com", age: 30, role: "Editor" },
    { id: 9, name: "Patricia Brown", email: "patricia.brown@example.com", age: 30, role: "Editor" },
    { id: 10, name: "Patricia Brown", email: "patricia.brown@example.com", age: 30, role: "Editor" },
];

export default function UserDataGrid() {
    return (
        <div className="user-data-box" style={{ border: "1px solid #e3e6f0", borderRadius: "10px", padding: "20px", backgroundColor: "#ffffff" }}>
            <h3 style={{ marginBottom: "20px" }}>User Data</h3>
            <DataGrid
                dataSource={userData}
                showBorders={true}
                rowAlternationEnabled={true}
            >
                <FilterRow visible={true} />
                <HeaderFilter visible={true} />
                <Paging defaultPageSize={5} />

                <Column dataField="id" caption="ID" width={50} />
                <Column dataField="name" caption="Name" />
                <Column dataField="email" caption="Email" />
                <Column dataField="age" caption="Age" />
                <Column dataField="role" caption="Role" />
            </DataGrid>
        </div>
    )
}
