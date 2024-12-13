// NOTE : not fully compplete, still figuring out the logic
// TODO : look into Redux Store toolkit instead
export namespace routes_data {
  // we will need to store the name of the routes here
  // so that we can get all the values from local storage
  var routes: any[] = [];
  export function getRoutes() {
    return routes;
  }

  export function setRoutes(route: any) {
    routes.push(route);
  }

  export function displayRoutes() {
    routes.forEach((route) => {
      console.log(`Current Route : ${route}`);
    });
  }
  // export function pushToStorage(routeName: string, routeFunction: string) {
  //   // originally, the data will be in array format
  //   // we will only be calling on this function once
  //   localStorage.setItem(routeName, JSON.stringify(routeFunction));
  // }

  // // we will call on this function after calling on the setter function
  // export function getFromLocalStorage(key: string) {
  //   // revery the data back to original array
  //   return JSON.stringify(localStorage.getItem(key));
  // }

  // export function getAllItems() {
  //   var archive: any = {};
  //   var routes = [];
  //   let keys = Object.keys(localStorage);
  //   let i = keys.length;

  //   while (i--) {
  //     archive[keys[i]] = localStorage.getItem(keys[i]);
  //     routes.push(localStorage.getItem(keys[i]));
  //   }

  //   // visualize
  //   console.log(`The archive data is : ${archive}`);
  //   console.log(`The routes is : ${routes}`);
  //   return archive;
  // }
  // export function clearLocalStorage() {
  //   localStorage.clear();
  // }
}
