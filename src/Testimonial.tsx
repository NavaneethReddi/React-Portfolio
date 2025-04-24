import React, { useState } from "react";
import karenImg from "./image.png";
import jagadeeshImg from "./assets/jagadeesh.png";
import bradImg from "./assets/brad.png";

type Testimonial = {
  name: string;
  feedback: string;
  role?: string;
  avatar?: string;
  rating?: number;
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
  {
    name: "Jagadeesh Natarajan",
    feedback:
      "Navaneeth is one of the cool and dedicated developer I ever see. He is very punctual and calm and more over very good at technical. He was managing more number of projects under his supervision, though the count is more he didn't even gets pressured in completing or meeting timeline in deliveries. He will have a very good knowledge in technical and pinpoint minor things also during his review which will increase the credibility of projects output. Am happy to working with Navaneeth. Congrats for your future endeavours.",
    role: "Technical Architect, Cognizant Technologies",
    avatar: jagadeeshImg,
    rating: 5,
  },
  {
    name: "Brad Mages",
    feedback:
      "A valuable and productive technical resource. Has a great ability to connect with stakeholders and create operational efficiencies through software enhancements.",
    role: "Product Owner, Salesforce",
    avatar: bradImg,
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
  const [paused, setPaused] = useState(false);

  // Duplicate testimonials for infinite effect
  const trainTestimonials = [...testimonials, ...testimonials];

   

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        padding: "2rem 0",
      }}
    >
      <h2
        style={{
          color: "#ffb347",
          fontWeight: 700,
          fontSize: "2rem",
          marginBottom: "2rem",
          letterSpacing: "0.5px",
          textAlign: "center",
        }}
      >
        Testimonials
      </h2>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            animation: "testimonial-train 18s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            gap: "2rem",
            willChange: "transform",
          }}
        >
          {trainTestimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                minWidth: 340,
                maxWidth: 340,
                background: "linear-gradient(135deg, #232526 60%, #3a3a3a 100%)",
                borderRadius: "18px",
                boxShadow: "0 2px 16px rgba(67,97,238,0.10)",
                padding: "2rem 2rem 1.5rem 2rem",
                color: "#f8fafc",
                border: "1.5px solid #353b48",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "1rem",
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
      </div>
      <style>
        {`
          @keyframes testimonial-train {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (max-width: 600px) {
            div[style*="min-width: 340px"] {
              min-width: 90vw !important;
              max-width: 90vw !important;
              min-height: 320px !important;
              max-height: 320px !important;
            }
          }
        `}
      </style>
    </div>
  );
}