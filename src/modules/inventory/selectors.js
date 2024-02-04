const selectFilteredItems = (store) => store.items["filteredList"];
const getList = (store) => store.items["list"];
const getCategories = (store) => store.items["categories"];
export { selectFilteredItems, getList, getCategories };
