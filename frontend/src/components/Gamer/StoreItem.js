import "./styles/StoreItem.css";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

// Yuanyuan
// Store item
const StoreItem = ({ game }) => {
  let curUser = JSON.parse(sessionStorage.getItem("currUser"));
  const addHandler = async (game) => {
    // Update id for game item
    game._id = game._id + "_" + uuidv4();

    const addInputData = {
      user: curUser,
      game: game,
    };

    const addResult = await fetch("/api/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addInputData),
    });
    if (!addResult.ok) {
      console.log("Response status ", addResult.status);
    } else {
      alert("Game added to your cart!");
    }
  };
  return (
    <div className="card mb-30">
      <div>
        <div className="mainImg">
          <img src={game.gameImageURL} alt="Game Image" />
        </div>
      </div>
      <div className="card-body text-center">
        <h4 className="card-title">{game.gameTitle}</h4>
        <h5 className="card-text">
          <small>price: </small>${game.gamePrice}
        </h5>
        <h5 className="card-text">
          <small>published by: </small>
          {game.publishedBy}
        </h5>
        <button
          onClick={() => addHandler(game)}
          className="btn btn-sm btn-warning float-right"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

StoreItem.propTypes = {
  game: PropTypes.shape({
    _id: PropTypes.string,
    gameTitle: PropTypes.string,
    gameImageURL: PropTypes.string,
    gameDesc: PropTypes.string,
    gamePrice: PropTypes.string,
    publishedBy: PropTypes.string,
  }),
};

export default StoreItem;
