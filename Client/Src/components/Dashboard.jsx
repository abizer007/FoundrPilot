// src/components/Dashboard.jsx
import { ConfettiButton, ProgressRibbon, ChatBubble } from './FunComponents';

const Dashboard = () => (
  <div className="cyberpunk-theme">
    <header className="neon-header">
      <h1>🦄 SoloFoundr AI</h1>
      <ProgressRibbon level={3} xp={450} />
    </header>

    <div className="grid-layout">
      <div className="card idea-validator glow-purple">
        <h2>🚀 Idea Validator</h2>
        <ConfettiButton onClick={launchValidator}>
          Start Analysis
        </ConfettiButton>
      </div>

      <div className="card chatbot-card glow-blue">
        <h2>🤖 Biz Strategist</h2>
        <ChatBubble type="ai">Ready to crush your goals today?</ChatBubble>
      </div>

      <div className="card investor-match glow-green">
        <h2>💸 Investor Radar</h2>
        <MatchMeter compatibility={82} />
      </div>
    </div>

    <div className="motivation-widget">
      <h3>🔥 Daily Grind</h3>
      <ProgressBar tasks={['Pitch Deck', 'Market Research', 'Networking']} />
      <AchievementBadge icon="🏆" text="5-Day Streak!" />
    </div>
  </div>
);
