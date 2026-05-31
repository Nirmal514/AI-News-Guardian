import React from "react";

function Sidebar({
  activePage,
  setActivePage
}) {

  const menu = [
    {
      key: "dashboard",
      label: "📊 Dashboard"
    },
    {
      key: "detector",
      label: "🧠 News Detector"
    },
    {
      key: "url",
      label: "🌐 URL Analyzer"
    },
    {
      key: "summary",
      label: "📝 Summarizer"
    },
    {
      key: "verify",
      label: "✅ Fact Checker"
    },
    {
      key: "chat",
      label: "🤖 AI Assistant"
    },
    {
      key: "image",
      label: "🖼️ Image Analyzer"
    },
    {
      key: "voice",
      label: "🎤 Voice Analysis"
    }
  ];

  return (

    <div className="sidebar">

      {/* Logo Section */}

      <div className="logo-container">

        <div className="logo-circle">
          🛡
        </div>

        <h2 className="logo">
          AI News Guardian
        </h2>

      </div>

      {/* Navigation Menu */}

      {menu.map((item) => (

        <button
          key={item.key}
          className={
            activePage === item.key
              ? "menu-btn active"
              : "menu-btn"
          }
          onClick={() =>
            setActivePage(item.key)
          }
        >
          {item.label}
        </button>

      ))}

      {/* Footer Section */}

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          right: "20px",
          textAlign: "center",
          color: "#94A3B8",
          fontSize: "12px"
        }}
      >
        <p>Version 1.0</p>
        <p>AI News Guardian</p>
      </div>

    </div>

  );
}

export default Sidebar;