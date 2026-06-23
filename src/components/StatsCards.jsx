function StatsCards() {
  return (
    <section className="stats-cards">

      <div className="stat-card">
        <p>OPEN</p>
        <h3>0.8516</h3>
      </div>

      <div className="stat-card">
        <p>LAST</p>
        <h3>0.8530</h3>
      </div>

      <div className="stat-card">
        <p>CHANGE</p>
        <h3 className="positive">
          +0.0014
        </h3>
      </div>

      <div className="stat-card">
        <p>% CHANGE</p>
        <h3 className="positive">
          ▲ +0.16%
        </h3>
      </div>

    </section>
  );
}

export default StatsCards;