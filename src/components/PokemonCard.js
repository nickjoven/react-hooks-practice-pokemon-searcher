import React, { useState } from "react";
import { Card } from "semantic-ui-react";

const PokemonCard = ({ id, name, hp, sprites }) => {
  const [isFrontSprite, setisFrontSprite] = useState(true)

  const handdleToggleSprite = () => {
    setisFrontSprite(isFrontSprite => !isFrontSprite)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img 
            onClick={handdleToggleSprite}
            alt={name}
            src={
              isFrontSprite
              ? sprites.front
              : sprites.back
            }
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
