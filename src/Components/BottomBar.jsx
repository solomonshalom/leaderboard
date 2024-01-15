import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 h-10 bg-yellow-100 w-full flex items-center px-6 justify-between">
      <div className="text-sm">
        Bethel Leaderboard by{" "}
        <a
          className="text-yellow-700 font-semibold"
          rel="noreferrer"
          target="_blank"
          href="https://linktr.ee/solomonlijo"
        >
          @solomonlijo
        </a>
      </div>
    </div>
  );
}
