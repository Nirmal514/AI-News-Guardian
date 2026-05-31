import React, { createContext, useState } from "react";

export const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children }) => {

  const [stats, setStats] = useState({
    totalAnalyses: 0,
    realNews: 0,
    fakeNews: 0,
    credibilityScores: []
  });

  const addAnalysis = (prediction, credibility) => {

    setStats((prev) => ({

      totalAnalyses: prev.totalAnalyses + 1,

      realNews:
        prediction === "REAL NEWS"
          ? prev.realNews + 1
          : prev.realNews,

      fakeNews:
        prediction === "FAKE NEWS"
          ? prev.fakeNews + 1
          : prev.fakeNews,

      credibilityScores: [
        ...prev.credibilityScores,
        credibility
      ]
    }));
  };

  return (
    <AnalyticsContext.Provider
      value={{
        stats,
        addAnalysis
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};