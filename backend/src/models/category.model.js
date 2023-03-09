class Category {
    constructor(main){
        this.main = main;
    }
}

const categoryconverter = {
    toFirestore: (category) => {
        return {
            main: category.main,
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Category(
            data.main,
        )
    }
};

module.exports = {
    Category,
    categoryconverter,
}