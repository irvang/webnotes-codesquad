
let noteForm = document.querySelector('form[id=new-note');

noteForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  let input = document.querySelector('input[name=note]');

  try {

    let response = await fetch('/notes', {
      method: 'POST',
      body: JSON.stringify({ note: input.value }),
      headers: {
        "content-type": "application/json" 
      }
    });

    let textHtml = await response.text();

    document.querySelector('section#note-cards').innerHTML = textHtml
    // console.log(textHtml)
    input.value = '';
    

  } catch (err) {
    console.error(err)
  }


});

let notesSection = document.querySelector('section#note-cards');

notesSection.addEventListener('click', (evt) => {
  if (evt.target && evt.target.matches('.card-header>button')) {



    //same as let id = evt.target.dataset.id (search on web 
    // for Destructuring Assignment in JavaScript)
    //we extract the index using the dataset property we stored earlier on 
    // our button object 
    let { id } = evt.target.dataset;

    // sends request to match route "/notes/:id" , where :id is a parameter
    // returns a promise that will trigger the .then method when done
    // the promise returned by fetch is stored in promise1
    let promise1 = fetch('/notes/' + id, {
      method: 'DELETE'
    });

    //triggered when first promise finishes, now stored in promise2
    let promise2 = promise1.then((response) => {

      //response.json() extracts the JSON data from body. Returning it creates
      // another promise that will call the next ".then" method when the data is parsed
      return response.text();
    });

    promise2.then((textHtml) => {//textHtml is the parsed data as a JS object

      document.querySelector('section#note-cards').innerHTML = textHtml;
      // console.log()
    })
      .catch((err) => console.error(err));//if there are any errors, they would be caught on .catch
  }
});
