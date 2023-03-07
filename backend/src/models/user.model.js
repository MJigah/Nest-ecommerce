class User{
    constructor(email, username, password, createdAt, updatedAt){
        this.email = email;
        this.username = username;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

const userConverter = {
    toFirestore: (user) => {
        return {
            email: user.email,
            username: user.username,
            password: user.password,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.email, data.username, data.password, data.createdAt, data.updatedAt);
    }
};

module.exports = {
    User,
    userConverter,
};