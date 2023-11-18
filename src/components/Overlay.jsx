const Overlay = () => {
  return (
    <div className="overlay">
      <div className="overlay-inner">
        <div className="categories-container">
          <h2>Feiern?</h2>
          <p>Worauf hast du Lust?</p>
          <select name="categories" className="filterByCategories">
            <option selected>Wähle ein Musikrichtung</option>
            <option value="elektro">Elektro</option>
            <option value="rock">Rock</option>
            <option value="hip-hop">Hip-hop</option>
            <option value="jazz">Jazz</option>
          </select>
        </div>
      </div>
    </div>
  )
}
export default Overlay
