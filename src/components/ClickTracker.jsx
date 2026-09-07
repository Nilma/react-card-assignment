import { useState } from "react";
import { MousePointerClick } from "lucide-react";

export default function ClickTracker() {
  const [count, setCount] = useState(0);

  return (
    <article className="feature-card">
      <div className="feature-icon"><MousePointerClick size={28} /></div>
      <div>
        <p className="counter-label">Number of clicks</p>
        <p className="counter">{count}</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        {count >= 10 && <p className="success-message">🎉 You unlocked level 2!</p>}
      </div>
    </article>
  );
}
