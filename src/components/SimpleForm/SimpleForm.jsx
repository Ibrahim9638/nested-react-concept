

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.email.value)
    }
    return (
        <div className="text-center ">
            <form  onSubmit={handleSubmit}>
                <input className="border-2 border-black p-2 rounded mb-2" type="text" name="name" placeholder="Enter Your Name"/>
                <br />
                <input className="border-2 border-black p-2 rounded mb-2" type="email" name="email" placeholder="Enter Your Email"/>
                <br />
                <input className="border-2 border-black p-2 rounded mb-2" type="text" name="phone" placeholder="Enter Your Phone"/>
                <br />
                <button className="btn btn-primary w-28 mb-2" type="submit" 
                value='submit'>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;