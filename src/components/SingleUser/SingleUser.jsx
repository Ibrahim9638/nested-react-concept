import { Link } from "react-router-dom";

const SingleUser = ({ comment }) => {
  const { id, name, body, email } = comment;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title"> {name}</h2>
        <p>Title: {body}</p>
        <p>
          <small>Email: {email}</small>
        </p>
        <div className="card-actions justify-end">
          <Link to={`/user/${id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
