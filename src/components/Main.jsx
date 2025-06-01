import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

const Main = () => {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer.", "UI Enthusiast.", "Tech Creator."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "instagram",
      icon: "bxl-instagram",
      url: "https://www.instagram.com/hzkiashn02/",
      color: "#E4405F",
      label: "@hzkiashn02",
    },
    {
      name: "whatsapp",
      icon: "bxl-whatsapp",
      url: "https://wa.me/6289510144492",
      color: "#25D366",
      label: "Chat on WhatsApp",
    },
    {
      name: "github",
      icon: "bxl-github",
      url: "https://github.com/Hizkia178",
      color: "#181717",
      label: "Hizkia178",
    },
  ];

  const donationMethods = [
    {
      name: "DANA",
      number: "085945979113",
      color: "#118EEA",
      qrCode: "https://via.placeholder.com/150?text=DANA+QR",
    },
  ];

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-11">
           
            <div className="text-center mb-5" data-aos="fade-down">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Hizkia Siahaan"
                className="rounded-circle border border-4 border-white shadow-lg mb-3"
                style={{ width: "130px", height: "130px", objectFit: "cover" }}
              />
              <h2 className="fw-bold text-white mb-2">Hizkia Siahaan</h2>
              <p className="text-white lead mb-3">
                <span ref={typedRef}></span>
              </p>
            </div>

         
            <div className="mb-5">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-block mb-3 text-decoration-none"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div
                    className="card border-0 shadow-sm"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.03)";
                      e.currentTarget.style.boxShadow = `0 8px 20px ${link.color}33`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
                    }}
                  >
                    <div className="card-body d-flex align-items-center p-3">
                      <i
                        className={`bx ${link.icon} fs-3 me-3`}
                        style={{ color: link.color }}
                      ></i>
                      <span className="fw-medium text-white">{link.label}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

         
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <button
                className="btn btn-outline-light w-100 rounded-pill py-3 shadow-sm"
                onClick={() => setShowDonationModal(true)}
              >
                <i className="bx bx-coffee me-2"></i>Buy Me a Coffee
              </button>
            </div>

           
            <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="500">
              <p className="text-white-50 small">
                Made with <i className="bx bx-heart text-danger"></i> by{" "}
                <a
                  href="https://github.com/Hizkia178"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-50"
                >
                  Hizkia178
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

     
      {showDonationModal && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          tabIndex="-1"
          onClick={(e) => e.target === e.currentTarget && setShowDonationModal(false)}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content border-0 shadow-lg"
              style={{ background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(10px)" }}
            >
              <div className="modal-header border-0 pb-2">
                <h5 className="modal-title fw-bold text-dark">
                  <i className="bx bx-coffee text-primary me-2"></i>Support My Work
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDonationModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="text-center mb-4">
                  <img
                    src={donationMethods[0].qrCode}
                    alt="DANA QR Code"
                    className="img-fluid rounded shadow-sm"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <p className="text-muted mt-2">Scan to donate via DANA</p>
                </div>
                <div className="card border-0 shadow-sm text-center">
                  <div className="card-body p-3">
                    <h6 className="mb-1 text-dark">DANA</h6>
                    <p className="text-muted mb-2">{donationMethods[0].number}</p>
                    <button
                      className="btn btn-sm btn-outline-primary rounded-pill"
                      onClick={() => handleCopy(donationMethods[0].number)}
                    >
                      <i className="bx bx-copy me-1"></i>
                      {copied ? "Copied!" : "Copy Number"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;