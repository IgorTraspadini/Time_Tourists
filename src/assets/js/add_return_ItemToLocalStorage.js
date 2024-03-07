  // function to add a Object in the localStorage.
  // If the localStorage is empty, it create a new array with the Object passed to the function and add it to the localStorage
  // If not, it push a new Object to the localStorage only in case that it doesn't exist.
  export function addToLocalStorage(name, item) {
    let LStorage = JSON.parse(localStorage.getItem(name));
    if (LStorage === null) {
      let _array = [item];
      localStorage.setItem(name, JSON.stringify(_array));
    }
    else if (!LStorage.includes(item)) {
      LStorage.push(item);
      localStorage.setItem(name, JSON.stringify(LStorage));
    }
  }
  

  // function to return the Object from the localStorage.
export function returnToLocalStorage(name) {
      let LStorage = JSON.parse(localStorage.getItem(name));
      if (LStorage !== null) {
        return LStorage;
      }
      else {
        return "";
      }
  }

