const userEndpoint = "/api/user";
const registerEndpoint = "/api/user/register";
const loginEndpoint = "/api/user/login";
const deleteUserEndpoint = (userId) => `/api/user/${userId}`;
const newDiaryEndpoint = (userId) => `/api/user/${userId}/diary`;
const diaryEndpoint = (userId, diaryId) =>
    `/api/user/${userId}/diary/${diaryId}`;

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

const getUserObj = (bodyData) => {
    return fetchUser(userEndpoint, bodyData);
};

const registerUser = (bodyData) => {
    return fetchUser(registerEndpoint, bodyData);
};

const loginUser = (bodyData) => {
    return fetchUser(loginEndpoint, bodyData);
};

const deleteUser = async (userId) => {
    await fetch(deleteUserEndpoint(userId), { method: "DELETE" });
};

const fetchDiary = async (endpoint, bodyData, method) => {
    const response = await fetch(endpoint, {
        method,
        body: bodyData,
    });
    const newDiaryData = await response.json();
    return newDiaryData;
};

const createDiary = (userId, bodyData) => {
    return fetchDiary(newDiaryEndpoint(userId), bodyData, "POST");
};

const updateDiary = (userId, diaryId, bodyData) => {
    return fetchDiary(diaryEndpoint(userId, diaryId), bodyData, "PUT");
};

const deleteDiary = async (userId, diaryId) => {
    await fetch(diaryEndpoint(userId, diaryId), { method: "DELETE" });
};

export {
    getUserObj,
    registerUser,
    loginUser,
    deleteUser,
    createDiary,
    updateDiary,
    deleteDiary,
};
