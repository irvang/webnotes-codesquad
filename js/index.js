console.log('sup')

// let noteContainer = document.querySelector('div.note-container');

// noteContainer.addEventListener('click', function(evt) {
//   if(evt.target && evt.target.matches('.btn-danger')) {

//     console.log(evt.target.dataset.index);

//     fetch('/notes/3'  , {
//       method: 'DELETE'
//     })
//     .then((response) => {
//       return response.json();
//     })
//     .then((jsonResponse) => console.log(jsonResponse))
//   }


// });

let buttons = document.getElementsByClassName('btn-danger');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (evt) {
    let { index } = evt.target.dataset;
    console.log(index)
    console.log(this)

    fetch('/notes/' + index, {
      method: 'DELETE'
    })
      .then((response) => {
        
        return response.json();
      })
      .then((jsonResponse) => {
        location.reload();
        console.log(jsonResponse)
      })
      .catch((err) => console.error(err));

  });

}



/**
 * Create route
 * make it delete item from array
 * to delete from array, it should select an index and remove item from array
 *
 *
 */