const selectFilteredItems = (store) => store.items["filteredList"];
const isEmptyList = (store) =>
  !Array.isArray(store.items["list"]) || store.items["list"].length === 0;
const getList = (store) => store.items["list"];
const getCategories = (store) => store.items["categories"];
export { selectFilteredItems, isEmptyList, getList, getCategories };
