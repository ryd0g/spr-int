function getStuff() {
    // get search criteria from form elements
    const query = someInput.value
    // there might be more to do here...
    // make a url with the search criteria
    const url = `some.url.com?q=${query}`
    const res = await fetch(url)
    const json = await res.json()
    // write the JSON to the DOM...
  }