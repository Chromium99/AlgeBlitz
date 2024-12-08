// NOTE : not fully compplete, still figuring out the logic

export namespace routes_data {
  // we will need to store the name of the routes here
  // so that we can get all the values from local storage
  export var routes: any[] = [];
  export function pushToStorage(routeName: string, routeFunction: string) {
    // originally, the data will be in array format
    // we will only be calling on this function once
    localStorage.setItem(routeName, JSON.stringify(routeFunction));
  }

  // we will call on this function after calling on the setter function
  export function getFromLocalStorage(key: string) {
    // revery the data back to original array
    return JSON.stringify(localStorage.getItem(key));
  }
  export function clearLocalStorage() {
    localStorage.clear();
  }
}
