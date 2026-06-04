export const phone = "+250783000222";
export const displayPhone = "+250 783 000 222";
export const email = "mugabely84@gmail.com";
export const address = "Kigali, Rwanda";

const whatsappText = encodeURIComponent(
  "Hello Amanilink, I would like to book a ride or accommodation.",
);

export const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}?text=${whatsappText}`;
