const Category = () => {
  return (
    <div className="categories-container">
      <h2>Magst du vielleicht was anderes?</h2>
      <select name="categories" className="filterByCategories">
        <option selected>Wähle ein Musikrichtung</option>
        <option value="elektro">Elektro</option>
        <option value="rock">Rock</option>
        <option value="hip-hop">Hip-hop</option>
        <option value="jazz">Jazz</option>
      </select>
    </div>
  )
}
export default Category
