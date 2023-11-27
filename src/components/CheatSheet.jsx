import { useState } from 'react';
import axios from 'axios';
import BossView from './views/BossView';
import AmmoView from './views/AmmoView';
import ArmorView from './views/ArmorView';
import AshView from './views/AshView';
import ClassView from './views/ClassView';
import CreatureView from './views/CreatureView';
import IncantationView from './views/IncantationView';
import ItemView from './views/ItemView';
import LocationView from './views/LocationView';
import NPCView from './views/NPCView';
import ShieldView from './views/ShieldView';
import SorceryView from './views/SorceryView';
import SpiritView from './views/SpiritView';
import TalismanView from './views/TalismanView';
import WeaponView from './views/WeaponView';
import CheatSheetForm from './CheatSheetForm';

const CheatSheetView = ({ category, responseData }) => {
  switch (category) {
    case 'ammos':
      return <AmmoView res={responseData} />;
    case 'armors':
      return <ArmorView res={responseData} />;
    case 'ashes':
      return <AshView res={responseData} />;
    case 'bosses':
      return <BossView res={responseData} />;
    case 'classes':
      return <ClassView res={responseData} />;
    case 'creatures':
      return <CreatureView res={responseData} />;
    case 'incantations':
      return <IncantationView res={responseData} />;
    case 'items':
      return <ItemView res={responseData} />;
    case 'locations':
      return <LocationView res={responseData} />;
    case 'npcs':
      return <NPCView res={responseData} />;
    case 'shields':
      return <ShieldView res={responseData} />;
    case 'sorceries':
      return <SorceryView res={responseData} />;
    case 'spirits':
      return <SpiritView res={responseData} />;
    case 'talismans':
      return <TalismanView res={responseData} />;
    case 'weapons':
      return <WeaponView res={responseData} />;
    default:
      return <div className='none'></div>;
  }
};

const CheatSheet = () => {
  const [responseData, setResponseData] = useState(undefined);
  const [dataCategory, setDataCategory] = useState(undefined);
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState('ammos');

  const fetchAndFilter = async (category, text) => {
    try {
      const res = await axios.get(
        `https://eldenring.fanapis.com/api/${category}?limit=100`
      );
      console.log(res.data.data);
      const filteredData = res.data.data.filter((obj) =>
        obj.name.toLowerCase().includes(text.toLowerCase())
      );
      console.log(filteredData);
      if (filteredData.length > 0) {
        // avoid rendering without data
        setDataCategory(category);
        setResponseData(filteredData[0]);
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

	

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [category, inputText] = e.target;

    console.log(inputText.value);

    if (!inputText.value) {
      alert('Your gonna need it...');
      return;
    }
    await fetchAndFilter(category.value, inputText.value);
    setInputValue('');
  };

  return (
    <div>
      <CheatSheetForm
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
        category={category}
        setCategory={setCategory}
      />
      <div className="data">
        <CheatSheetView category={dataCategory} responseData={responseData} />
      </div>
    </div>
  );
};
export default CheatSheet;
