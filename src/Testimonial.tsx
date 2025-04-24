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
      "Navaneeth has been a pleasure to have on our team! He is always taking initiative to help find the best experience for our customers",
     role: "Senior Scrum Master at U.S. Bank",
    avatar: karenImg,
    rating: 5,
  },
  {
    name: "Jagadeesh Natarajan",
    feedback:
      "Navaneeth is one of the cool and dedicated developer I ever see. He is very punctual and calm and more over very good at technical",
     role: "Technical Architect, Cognizant Technologies",
    avatar: jagadeeshImg,
    rating: 5,
  },
  {
    name: "Brad Mages",
    feedback:
      "A valuable and productive technical resource. Has a great ability to connect with stakeholders and create operational efficiencies", 
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

// ...existing imports and code...

// ...existing imports and code...

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  // Detect mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
  const [current, setCurrent] = useState(0);

  // Duplicate testimonials for infinite effect on desktop
  const trainTestimonials = [...testimonials, ...testimonials];

  // Increased grid size
  const gridWidth = 420;
  const gridHeight = 440;

  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        padding: "2rem 0",
        boxSizing: "border-box",
        maxWidth: "100vw",
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
      {isMobile ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            boxSizing: "border-box",
            maxWidth: "100vw",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              minWidth: "96vw",
              maxWidth: "96vw",
              minHeight: gridHeight,
              maxHeight: gridHeight,
              background: "linear-gradient(135deg, #232526 60%, #3a3a3a 100%)",
              borderRadius: "18px",
              boxShadow: "0 2px 16px rgba(67,97,238,0.10)",
              padding: "2.5rem 1.2rem 2rem 1.2rem",
              color: "#f8fafc",
              border: "1.5px solid #353b48",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "1rem",
              boxSizing: "border-box",
              justifyContent: "center",
              height: gridHeight,
              position: "relative",
              overflow: "hidden",
              wordBreak: "break-word",
            }}
          >
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "1.2rem",
                border: "3px solid #ffb347",
                boxShadow: "0 2px 8px rgba(67,97,238,0.10)",
              }}
            />
            <StarRating rating={testimonials[current].rating} />
            <div
              style={{
                width: "100%",
                overflowY: "auto",
                maxHeight: 160,
                margin: "1.5rem 0 1rem 0",
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                scrollbarWidth: "thin",
                msOverflowStyle: "auto",
              }}
            >
              <p
                style={{
                  fontSize: "1.18rem",
                  fontStyle: "italic",
                  color: "#e0e7ef",
                  textAlign: "center",
                  lineHeight: 1.7,
                  margin: 0,
                  padding: 0,
                  width: "100%",
                  wordBreak: "break-word",
                }}
              >
                "{testimonials[current].feedback}"
              </p>
            </div>
            <div
              style={{
                fontWeight: 700,
                color: "#ffb347",
                marginTop: "0.7rem",
                fontSize: "1.18rem",
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              {testimonials[current].name}
            </div>
            <div
              style={{
                color: "#bfc9d1",
                fontSize: "1.08rem",
                marginTop: "0.2rem",
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              {testimonials[current].role}
            </div>
            {/* Navigation arrows */}
            <button
              onClick={prev}
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(67,97,238,0.08)",
                border: "none",
                borderRadius: "50%",
                width: 38,
                height: 38,
                color: "#ffb347",
                fontSize: 26,
                cursor: "pointer",
                zIndex: 2,
              }}
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(67,97,238,0.08)",
                border: "none",
                borderRadius: "50%",
                width: 38,
                height: 38,
                color: "#ffb347",
                fontSize: 26,
                cursor: "pointer",
                zIndex: 2,
              }}
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
            boxSizing: "border-box",
            maxWidth: "100vw",
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
              gap: "2.5rem",
              willChange: "transform",
            }}
          >
            {trainTestimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  minWidth: gridWidth,
                  maxWidth: gridWidth,
                  minHeight: gridHeight,
                  maxHeight: gridHeight,
                  background: "linear-gradient(135deg, #232526 60%, #3a3a3a 100%)",
                  borderRadius: "18px",
                  boxShadow: "0 2px 16px rgba(67,97,238,0.10)",
                  padding: "2.5rem 2rem 2rem 2rem",
                  color: "#f8fafc",
                  border: "1.5px solid #353b48",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "1rem",
                  boxSizing: "border-box",
                  justifyContent: "center",
                  height: gridHeight,
                  overflow: "hidden",
                  wordBreak: "break-word",
                }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "1.2rem",
                    border: "3px solid #ffb347",
                    boxShadow: "0 2px 8px rgba(67,97,238,0.10)",
                  }}
                />
                <StarRating rating={t.rating} />
                <div
                  style={{
                    width: "100%",
                    overflowY: "auto",
                    maxHeight: 160,
                    margin: "1.5rem 0 1rem 0",
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    scrollbarWidth: "thin",
                    msOverflowStyle: "auto",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.18rem",
                      fontStyle: "italic",
                      color: "#e0e7ef",
                      textAlign: "center",
                      lineHeight: 1.7,
                      margin: 0,
                      padding: 0,
                      width: "100%",
                      wordBreak: "break-word",
                    }}
                  >
                    "{t.feedback}"
                  </p>
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    color: "#ffb347",
                    marginTop: "0.7rem",
                    fontSize: "1.18rem",
                    textAlign: "center",
                    wordBreak: "break-word",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    color: "#bfc9d1",
                    fontSize: "1.08rem",
                    marginTop: "0.2rem",
                    textAlign: "center",
                    wordBreak: "break-word",
                  }}
                >
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <style>
        {`
          @keyframes testimonial-train {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}