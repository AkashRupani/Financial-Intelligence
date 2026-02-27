import { useState } from "react";

const InsightCard = ({ type, message }) => {
  const styles = {
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800",
    info: "bg-blue-50 border-blue-400 text-blue-800",
    alert: "bg-red-50 border-red-400 text-red-800",
  };

  return (
    <div className={`border-l-4 p-4 rounded-md ${styles[type]}`}>
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};

const InsightsPanel = () => {
  const [expanded, setExpanded] = useState(false);

  const insights = [
    { type: "warning", message: "You spent 30% more on food this month" },
    { type: "info", message: "Your savings rate improved by 8%" },
    { type: "alert", message: "Netflix subscription charge detected" },
    { type: "warning", message: "Travel expenses exceeded your usual average" },
  ];

  const visibleInsights = expanded ? insights : insights.slice(0, 3);

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Smart Insights</h2>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-blue-600 hover:underline"
        >
          {expanded ? "Show Less" : "View All"}
        </button>
      </div>

      <div className="space-y-3">
        {visibleInsights.map((insight, index) => (
          <InsightCard key={index} {...insight} />
        ))}
      </div>
    </div>
  );
};

export default InsightsPanel;
