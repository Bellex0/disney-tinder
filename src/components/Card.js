import React from "react";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const { name, age, distance, bio, pics } = data[i];

  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans)
        }}
      >
        <div className="card">
          <Carousel>
            {pics.map((pic, index) => (
              <img src={pic} key={index} alt="profile_picture" />
            ))}
          </Carousel>
          <h2>{name},</h2>
          <h2>{age}</h2>
          <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> {distance}</h5>
          <h5>{bio}</h5>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Card;
