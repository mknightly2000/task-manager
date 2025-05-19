import { useState, useEffect } from "react";

function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("http://localhost:8080/")
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => setMessage("Error loading message!"));
    }, []);

    return <h1>{message}</h1>;
}

export default App;