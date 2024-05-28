import { useLoaderData } from "react-router-dom";
import SingleUser from "../components/SingleUser/SingleUser";


const Users = () => {
    const comments = useLoaderData();
    
    return (
        <div>
            <h2>Total User of our page: {comments.length}</h2>
            <div className="grid grid-cols-4 gap-5">
                {
                    comments.map(comment=> <SingleUser 
                        key={comment.id}
                        comment={comment}
                        ></SingleUser>)
                }
            </div>
        </div>
    );
};

export default Users;