console.log('sup')


let buttons = document.getElementsByClassName('btn-danger');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (evt) {

    //same as let index = evt.target.dataset.index (search on web 
    // for Destructuring Assignment in JavaScript)
    //we extract the index using the dataset property we stored earlier on 
    // our button object
    let { index } = evt.target.dataset;

    // sends request to match route "/notes/:id" , where :id is a parameter
    // returns a promise that will trigger the .then method when done
    // the promise returned by fetch is stored in promise1
    let promise1 = fetch('/notes/' + index, {
      method: 'DELETE'
    });

    //triggered when first promise finishes, now stored in promise2
    let promise2 = promise1.then((response) => {

      //response.json() extracts the JSON data from body. Returning it creates
      // another promise that will call the next ".then" method when the data is parsed
      return response.json();
    });

    promise2.then((jsonResponse) => {//jsonResponse is the parsed data as a JS object
      location.reload(); //reload page

      //not really doing much since page is reloaded before this point
      console.log(jsonResponse);
    })
      .catch((err) => console.error(err));//if there are any errors, they would be caught on .catch

  });

}


let object = {
  index1: 'abc'
}

let { index1 } = object;

object.index1 = 2;
console.log(index1)
console.log(object)


/**
 * Create route
 * make it delete item from array
 * to delete from array, it should select an index and remove item from array
 *
 *
 */