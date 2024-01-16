import { auth, db } from "../../config/firebaseConfig";

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
    console.log(sales.size);
    sales.forEach((sale) =>
      saleCallback({
        id: sale.id,
        date: sale.get("date"),
      })
    );
  });
};

export { getSalesFromFirestore };
