class Store{
    constructor(name, address, isVerified, email, contact, category){
        this.name = name;
        this.address = address;
        this.isVerified = isVerified;
        this.email = email;
        this.contact = contact;
        this.category = category;
    }
}

const storeConverter = {
    toFirestore: (store) => {
        return {
            name: store.name,
            address: store.address,
            isVerified: store.isVerified,
            email: store.email,
            contact: store.contact,
            category: store.category,
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Store(data.name, data.address, data.isVerified, data.email, data.contact, data.category,);
    }
}

module.exports = {
    Store,
    storeConverter,
};