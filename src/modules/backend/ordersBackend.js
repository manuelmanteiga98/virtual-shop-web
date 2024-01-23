import { auth, db } from "../../config/firebaseConfig";

let initialized = false;

const getOrdersFromFirestore = async (orderCallback) => {
  // It can only be executed once
  if (initialized) return;
  else initialized = true;

  const email = auth.currentUser?.email;
  if (!email) {
    alert("Auth error");
    return;
  }
  let userRef = db.collection("users").doc(email);
  let ordersRef = userRef.collection("orders");
  await ordersRef.get().then((orders) => {
    orders.forEach((order) =>
      orderCallback({
        id: order.id,
        date: order.get("date"),
      })
    );
  });
};

export { getOrdersFromFirestore };
