import { useState } from 'react'
import Hero from '../components/Hero'

const content = "Log In Page Content"

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
    };

    return (
        <div className="container">
            <Hero title="Log In"/>
            <form className="login" onSubmit={handleSubmit}>
                <div className="username">
                    <label htmlFor="username">Username:</label>
                    <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LogIn