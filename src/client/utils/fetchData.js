const userEndpoint = "/api/user";
const registerEndpoint = "/api/user/register";
const loginEndpoint = "/api/user/login";

const fetchUser = async (endpoint, bodyData) => {
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
    });
    const data = await response.json();
    return data;
};

const getUserObj = async (bodyData) => {
    return fetchUser(userEndpoint, bodyData);
};

const registerUser = async (bodyData) => {
    return fetchUser(registerEndpoint, bodyData);
};

const loginUser = async (bodyData) => {
    return fetchUser(loginEndpoint, bodyData);
};

export { registerUser, loginUser, getUserObj };
