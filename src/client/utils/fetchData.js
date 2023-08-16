const userEndpoint = "/api/user";
const registerEndpoint = "/api/user/register";
const loginEndpoint = "/api/user/login";
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

const fetchDiary = async (endpoint, diaryData, method) => {
    const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(diaryData),
    });
    const newDiaryData = await response.json();
    return newDiaryData;
};

const createDiary = (userId, diaryData) => {
    return fetchDiary(newDiaryEndpoint(userId), diaryData, "POST");
};

const updateDiary = (userId, diaryId, diaryData) => {
    return fetchDiary(diaryEndpoint(userId, diaryId), diaryData, "PUT");
};

const deleteDiary = async (userId, diaryId) => {
    await fetch(diaryEndpoint(userId, diaryId), { method: "DELETE" });
};

export {
    registerUser,
    loginUser,
    getUserObj,
    createDiary,
    updateDiary,
    deleteDiary,
};
