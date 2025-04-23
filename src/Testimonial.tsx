import React from "react";
import karenImg from "./image.png"; // Import the image

type Testimonial = {
  name: string;
  feedback: string;
  role?: string;
  avatar?: string;
  rating?: number; // 1 to 5
};

const testimonials: Testimonial[] = [
  {
    name: "Karen Longworth, CSM, ICP-ACC",
    feedback:
      "Navaneeth has been a pleasure to have on our team! He is always taking initiative to help find the best experience for our customers. And, he continuously demonstrates his engineering and leadership skills by proactively solutioning the best approaches for development, while teaching his peers of the same. As the lead developer for our online web presence, he willingly collaborates with other teams to resolve any issues. Navaneeth always has a positive attitude and is very personable, becoming a great colleague to collaborate with. It has been such a privilege to work closely with him for the past several years.",
    role: "Senior Scrum Master at U.S. Bank",
    avatar: karenImg,
    rating: 5,
  },
];

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="star-rating" style={{ color: "#FFD700" }}>
      {Array.from({ length: 5 }).map((_, i) =>
        i < rating ? "★" : "☆"
      )}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        color: "#f8fafc", // Light text for dark backgrounds
      }}
    >
      <h2
        style={{
          color: "#ffb347",
          fontWeight: 700,
          fontSize: "2rem",
          marginBottom: "1.5rem",
          letterSpacing: "0.5px",
        }}
      >
        Testimonials
      </h2>
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          style={{
            background: "linear-gradient(135deg, #232526 60%, #3a3a3a 100%)",
            borderRadius: "18px",
            boxShadow: "0 2px 16px rgba(67,97,238,0.10)",
            padding: "2rem 2rem 1.5rem 2rem",
            maxWidth: 700,
            width: "100%",
            color: "#f8fafc", // Ensure testimonial text is visible
            border: "1.5px solid #353b48",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={t.avatar}
            alt={t.name}
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "1rem",
              border: "3px solid #ffb347",
              boxShadow: "0 2px 8px rgba(67,97,238,0.10)",
            }}
          />
          <StarRating rating={t.rating} />
          <p
            style={{
              fontSize: "1.08rem",
              fontStyle: "italic",
              color: "#e0e7ef",
              margin: "1.2rem 0 0.7rem 0",
              textAlign: "center",
              lineHeight: 1.7,
            }}
          >
            "{t.feedback}"
          </p>
          <div
            style={{
              fontWeight: 700,
              color: "#ffb347",
              marginTop: "0.7rem",
              fontSize: "1.08rem",
              textAlign: "center",
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              color: "#bfc9d1",
              fontSize: "0.98rem",
              marginTop: "0.2rem",
              textAlign: "center",
            }}
          >
            {t.role}
          </div>
        </div>
      ))}
    </div>
  );
}