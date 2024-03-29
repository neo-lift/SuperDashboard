import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="John" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="john@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="+1 123 456 789" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="New York, USA" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Gender</label>
                    <div className="newUserGenderContainer">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
