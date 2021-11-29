import StoreGamesItem from "./StoreGamesItem.js";
import './styles/StoreGamesList.css';

// StoreGamesList component for the gaming company's store page.
// Takes storeGames array as props from the gaming company's 
// store page (GamingCompanyStorePage).
// Nathaniel
const StoreGamesList = ({ storeGames }) => {

  // Function is responsible for rendering each store game from storeGames as a list
  const renderStoreGames = () => {
    return storeGames.map((game) => (
      <StoreGamesItem key={`gameID_${game._id}`} game={game}></StoreGamesItem>
    ));
  }

  return (
    <div className="storeGamesListContainer">
      {renderStoreGames()}
    </div>
  );
}

export default StoreGamesList;