function Favorites({ favorites,setFromCurrency,
  setToCurrency,
 }) {

    const loadPair = (pair) => {
    const [from, to] = pair.split("/");
    console.log("Clicked:", from, to);

        setFromCurrency(from);
        setToCurrency(to);
    };

  return (
    <div className="favorites-panel">
      <h3>PINNED PAIRS</h3>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        favorites.map((pair) => (
          <div
            key={pair}
            className="favorite-item"
            onClick={() => loadPair(pair)}

          >
            {pair}
          </div>
        ))
      )}
    </div>
  );
}

export default Favorites;