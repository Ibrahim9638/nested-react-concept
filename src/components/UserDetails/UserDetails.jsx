import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const userDetail = useLoaderData();
    const {id, name, email} = userDetail;

    return (
        <div>
            <h2>Name: {name}</h2>
            <p>{id}</p>
            <p><small>{email}</small></p>
        </div>
    );
};

export default UserDetails;