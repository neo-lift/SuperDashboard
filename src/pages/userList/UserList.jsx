import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userListDataRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UserList() {
    const [data, setData] = useState(userListDataRows)

    const handleDelete = (id) => {
        // console.log(id)
        setData(data.filter(item=>item.id !== id))
    }

    const userListDataColumns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
            return (
                <div className="userListItemUsername">
                    <img src={params.row.avatar} alt="" className="userListAvatar" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 90 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 90 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return(
                <>
                    <Link to={ "/user/" + params.row.id } >
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
                </>    
            )
        } },
      ];

    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={userListDataColumns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
