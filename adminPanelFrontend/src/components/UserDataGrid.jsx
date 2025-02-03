import DataGrid, { Column, FilterRow, HeaderFilter, Paging } from "devextreme-react/data-grid"
import "devextreme/dist/css/dx.light.css"

const userData = [
        { "id": 1, "name": "Ahmet Yılmaz", "email": "ahmet.yilmaz@example.com", "age": 29, "role": "Yönetici" },
        { "id": 2, "name": "Ayşe Demir", "email": "ayse.demir@example.com", "age": 34, "role": "Editör" },
        { "id": 3, "name": "Mehmet Kaya", "email": "mehmet.kaya@example.com", "age": 25, "role": "İzleyici" },
        { "id": 4, "name": "Zeynep Çelik", "email": "zeynep.celik@example.com", "age": 41, "role": "Yönetici" },
        { "id": 5, "name": "Burak Şahin", "email": "burak.sahin@example.com", "age": 30, "role": "Editör" },
        { "id": 6, "name": "Elif Arslan", "email": "elif.arslan@example.com", "age": 28, "role": "Denetleyici" },
        { "id": 7, "name": "Fatma Koç", "email": "fatma.koc@example.com", "age": 33, "role": "Editör" },
        { "id": 8, "name": "Emre Aksoy", "email": "emre.aksoy@example.com", "age": 31, "role": "Yazar" },
        { "id": 9, "name": "Hakan Özkan", "email": "hakan.ozkan@example.com", "age": 35, "role": "İçerik Üretici" },
        { "id": 10, "name": "Selin Aydın", "email": "selin.aydin@example.com", "age": 27, "role": "Moderatör" }
    ]  

export default function UserDataGrid() {
    return (
        <div className="user-data-box" style={{ border: "1px solid #e3e6f0", borderRadius: "10px", padding: "20px", backgroundColor: "#ffffff" }}>
            <h3 style={{ marginBottom: "20px" }}>Ziyaretçi Bilgileri</h3>
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
