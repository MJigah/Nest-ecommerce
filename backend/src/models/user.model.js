class User{
    constructor(email, username, password, createdAt, updatedAt, address){
        this.email = email;
        this.username = username;
        this.password = password;
        this.address = address;
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
            address: user.address,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.email, data.username, data.password, data.address, data.createdAt, data.updatedAt);
    }
};

module.exports = {
    User,
    userConverter,
};