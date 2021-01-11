import React from "react";

const usePersistedState = (numOfCookies, storageName) => {

    const result = JSON.parse(localStorage.getItem(`${storageName}`));
    numOfCookies = numOfCookies+ result
return numOfCookies;

}

export default usePersistedState;