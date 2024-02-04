import { parse } from "date-fns";

// Function for sorting dates
const compareDates = (a, b) => {
  // Date conversion
  const dateA = parse(a.date, "HH:mm:ss dd-MM-yyyy", new Date());
  const dateB = parse(b.date, "HH:mm:ss dd-MM-yyyy", new Date());

  // Date comparison
      return dateA - dateB;
};

export { compareDates };
