function postComment() {
    // Retrieving the form data
    let myForm document.getElementById("mainForm");
    // we could create our own object with {}, but we can speed up our life by using the FormData interface
    var formData = new FormData(myForm);
    step 1: set up the XMLHttpRequest object
    let request = new XMLHttpRequest();
    //*** step 2: instantiate the request object
    let method "POST";
    let url="./message.php";
    request.open(method, url);
    step 3: Defining event listener for readystatechange event
    // note: you can improve this code by using the onload event too. Try it yourself.
    request.onreadystatechange = function() {
    // Check if the request is compete and was successful
    if(this.readyState === 4 && this.status === 200) {
    // Inserting the response from PHP server (which is given to us by the echo statement in PHP) and insert it into an HTML element
    document.getElementById("result").innerHTML = this.responseText;
    }
    };
    //*** step 4: send the request to the server
    request.send(formData);
    }