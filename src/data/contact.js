export const phone = "+250788208810";
export const email = "reservations@carsinrwanda.com";
export const address = "KG 7 Avenue, Kigali Heights, Kigali, Rwanda";

const whatsappText = encodeURIComponent(
  "Hello Cars in Rwanda, I would like to reserve a vehicle.",
);

export const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}?text=${whatsappText}`;
