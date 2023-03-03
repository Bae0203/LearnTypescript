import React from "react";

function findLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((e) => {
      console.log(e);
    });
  } else {
  }
}

const Location = () => {
  return (
    <>
      <button onClick={findLocation}>Location</button>
    </>
  );
};

export default Location;

/**
 * function findLocation() {

    if (navigator.geolocation) { 

        navigator.geolocation.getCurrentPosition(showYourLocation); 

    } else { 

        loc.innerHTML = "이 문장은 사용자의 웹 브라우저가 Geolocation API를 지원하지 않을 때 나타납니다!"; 

    }

}
 */
