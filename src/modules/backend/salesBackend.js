import { getDownloadURL, ref } from "firebase/storage";
import { auth, db, storage } from "../../config/firebaseConfig";

let initialized = false;

const getSalesFromFirestore = async (saleCallback) => {
  // It can only be executed once
  if (initialized) return;
  else initialized = true;

  const email = auth.currentUser?.email;
  if (!email) {
    alert("Auth error");
    return;
  }
  let userRef = db.collection("users").doc(email);
  let salesRef = userRef.collection("sales");
  await salesRef.get().then((sales) => {
    sales.forEach((sale) =>
      saleCallback({
        id: sale.id,
        date: sale.get("date"),
      })
    );
  });
};

const getSaleItems = async (saleID, itemCallback) => {
  try {
    const email = auth.currentUser?.email;
    if (!email) return;

    const snapshot = await db
      .collection("users")
      .doc(email)
      .collection("sales")
      .doc(saleID)
      .collection("items")
      .get();
    snapshot.forEach(async (item) => {
      try {
        const imageRef = ref(storage, `${email}/items/${item.id}`);
        const itemImage = await getDownloadURL(imageRef);
        saveSaleItem(item.id, item.get("units"), itemImage, itemCallback);
      } catch (imageError) {
        saveSaleItem(item.id, null, itemCallback);
      }
    });
  } catch (error) {
    // Handle general error
    console.error("Error getting items:", error);
  }
};

const saveSaleItem = async (itemID, units, itemImg, itemCallback) => {
  itemCallback({
    id: itemID,
    units: units,
    image: itemImg,
  });
};

export { getSalesFromFirestore, getSaleItems };
