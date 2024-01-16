const isLogged = (store) => store.auth.logged;
const getCategories = (store) => store["items"].categories;

export { isLogged, getCategories };
