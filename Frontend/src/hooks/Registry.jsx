import { useState } from "react"
const Registry = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:""
    });
    const handleChange = (e)=>{
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div>
            <h1>Register form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={handleChange} value={formData.name} />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={handleChange} value={formData.email} />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" onChange={handleChange} value={formData.password} />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default Registry

