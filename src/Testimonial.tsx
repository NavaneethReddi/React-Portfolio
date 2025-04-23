import React from "react";
import karenImg from "./image.png"; // Import the image


type Testimonial = {
  name: string;
  feedback: string;
  role?: string;
  avatar?: string;
  rating?: number; // 1 to 5
};

// ...existing code...
const testimonials: Testimonial[] = [
    {
      name: "Karen Longworth, CSM, ICP-ACC",
      feedback:
        "Navaneeth has been a pleasure to have on our team! He is always taking initiative to help find the best experience for our customers. And, he continuously demonstrates his engineering and leadership skills by proactively solutioning the best approaches for development, while teaching his peers of the same. As the lead developer for our online web presence, he willingly collaborates with other teams to resolve any issues. Navaneeth always has a positive attitude and is very personable, becoming a great colleague to collaborate with. It has been such a privilege to work closely with him for the past several years.",
      role: "Senior Scrum Master at U.S. Bank",
      avatar: karenImg, // Use imported image
      rating: 5,
    },
  ];
  // ...existing code...

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
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-list" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {testimonials.map((t, idx) => (
          <div
            className="testimonial-card"
            key={idx}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              padding: "1.5rem",
              maxWidth: "320px",
              flex: "1 1 300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {t.avatar && (
              <img
                src={t.avatar}
                alt={t.name}
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  marginBottom: "1rem",
                  objectFit: "cover",
                }}
              />
            )}
            <StarRating rating={t.rating} />
            <p className="testimonial-feedback" style={{ fontStyle: "italic", margin: "1rem 0" }}>
              "{t.feedback}"
            </p>
            <p className="testimonial-name" style={{ fontWeight: "bold" }}>
              {t.name}
            </p>
            {t.role && (
              <p className="testimonial-role" style={{ color: "#666", fontSize: "0.95rem" }}>
                {t.role}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}