// components/BuyNowButton.js
export default function BuyNowButton({ productName, quantity }) {
  const phoneNumber = "923035698492"; // Replace with your WhatsApp number (no + or spaces)

  const message = `Hi, I would like to order ${quantity} unit(s) of ${productName}.`;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
    >
      Buy Now on WhatsApp
    </a>
  );
}
