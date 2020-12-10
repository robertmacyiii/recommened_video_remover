function removeRelatedColumn () {
  if (document.readyState === 'ready' || document.readyState === 'complete') {
    const url_regex = /https:\/\/www.youtube.com\/watch*/;
    console.log(document.URL)
    const url_match = document.URL.match(url_regex);
    if (url_match) {
      console.log('URL matches regular expression for removing related videos.');
      var columnsElement = document.getElementById("columns");
      const listColumns = columnsElement.children;
      const listArray = Array.from(listColumns);
      listArray.forEach((child) => {
        if (child.id === "secondary") {
          child.remove();
        }
      })
    }
    else {
      console.log('URL does not match regular expression for removing related videos.');
    }
   
  }
  else {
    setTimeout(removeRelatedColumn, 300);
  }
};

function removeHomePageBrowse () {
  if (document.readyState === 'ready' || document.readyState === 'complete') {
    const url_regex = /https:\/\/www.youtube.com\/$/;
    console.log(document.URL);
    const url_match = document.URL.match(url_regex);
    if (url_match) {
      const browseElement = document.getElementsByClassName("ytd-page-manager");
      browseElement[0].remove();
    }
  }
  else {
    setTimeout(removeHomePageBrowse, 300);
  }
}

removeHomePageBrowse();
removeRelatedColumn();
console.log("Finished executing remove related column function");
