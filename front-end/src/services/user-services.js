export async function userLogin(details) {
    if (details.email === 'admin@test.com') {
        return {username: "Admin User", role: "admin"}
    };
    return { username: "Regular User", role: "user" };
}