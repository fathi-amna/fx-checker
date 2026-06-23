

function Tabs({ activeTab,setActiveTab,favoritesCount }) {
  return (
    <section className="tabs">

      <button
        className={
          activeTab === "history"
            ? "active-tab"
            : ""
        }
        onClick={() => setActiveTab("history")}
      >
        HISTORY
      </button>
      
      <button
        onClick={() => setActiveTab("compare")}
      >
        COMPARE
      </button>

       <button
        className={
          activeTab === "favorites"
            ? "active-tab"
            : ""
        }
        onClick={() => setActiveTab("favorites")}
      >
        FAVORITES

        <span className="badge">
          {favoritesCount}
        </span>
      </button>

      <button
        className={
          activeTab === "log"
            ? "active-tab"
            : ""
        }
        onClick={() => setActiveTab("log")}
      >
        LOG
      </button>

    </section>
  );
}

export default Tabs;