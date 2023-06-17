import { useState } from 'react';

const CheatSheetForm = ({
  handleSubmit,
  inputValue,
  setInputValue,
  category,
  setCategory,
}) => {
  return (
    <form className="form" id="cheat-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="Type">Category</label>

        <select
          name="Category"
          id="Categories"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="ammos">Ammos</option>
          <option value="armors">Armors</option>
          <option value="ashes">Ashes of War</option>
          <option value="bosses">Bosses</option>
          <option value="classes">Classes</option>
          <option value="creatures">Creatures</option>
          <option value="incantations">Incantations</option>
          <option value="items">Items</option>
          <option value="locations">Locations</option>
          <option value="npcs">NPCs</option>
          <option value="shields">Shields</option>
          <option value="sorceries">Sorceries</option>
          <option value="spirits">Spirits</option>
          <option value="talismans">Talismans</option>
          <option value="weapons">Weapons</option>
        </select>

        <label className="search">Search Elden Ring Info</label>
        <input
          type="text"
          placeholder="location, boss, items..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" value="Search" className="btn btn-block" />
      </div>
    </form>
  );
};
export default CheatSheetForm;
