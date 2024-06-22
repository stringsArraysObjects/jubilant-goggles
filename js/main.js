document.querySelector('.image-container').src = localStorage.getItem('picOfTheDay')
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=yaPjfbFxqJqVuneWcA9sEtFgGQcBWLCNzwfWwtWp&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
          localStorage.setItem('picOfTheDay', data.hdurl)
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('p').innerText = data.explanation
        document.querySelector('figcaption').innerText = data.title
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}