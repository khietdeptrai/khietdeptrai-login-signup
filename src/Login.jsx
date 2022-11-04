export const Login = () => {
    return (
        <form action="">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="youremail@..." />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="******" />
            <button type="submit">Log In</button>
        </form>
    )
}