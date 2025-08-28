import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Material UI Icon

const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = "919960840933"; // replace with your number (with country code)
  const message = "Hello, I would like to know more about your services!";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "32px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        cursor: "pointer",
        zIndex: 1000,
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)")
      }
    >
      <WhatsAppIcon style={{ fontSize: "32px" }} />
    </a>
  );
};

export default FloatingWhatsApp;
