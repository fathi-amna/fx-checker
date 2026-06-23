function Log({ logs, setLogs }) {
  const clearLogs = () => {
    setLogs([]);
    localStorage.removeItem("conversionLogs");
  };

  return (
    <div className="log-panel">
      <div className="log-header">
        <h3>CONVERSION LOG</h3>

        <button
          className="clear-btn"
          onClick={clearLogs}
        >
          Clear All
        </button>
      </div>

      {logs.length === 0 ? (
        <p>No conversions logged yet</p>
      ) : (
        logs.map((log) => (
          <div
            key={log.id}
            className="log-item"
          >
            <div>
              {log.amount} {log.from}
              {" → "}
              {log.result} {log.to}
            </div>

            <small>
              {log.date}
            </small>
          </div>
        ))
      )}
    </div>
  );
}

export default Log;