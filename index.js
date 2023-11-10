//[DOM]
    //Div element practice
    const container = document.querySelector("#container")
    const content = document.createElement("div")
    content.classList.add("content")
    content.textContent = "This is the glorious text-content!"
    container.appendChild(content)
    //P element practice
    const paragraph1 = document.createElement("p")
    paragraph1.style.color = "red"                       
    paragraph1.textContent = "Hey I'm red!!"
    container.appendChild(paragraph1)
    //H3 element practice
    const h3 = document.createElement("h3")
    h3.style.color = "blue"
    h3.textContent = "I'm a blue h3!"
    container.appendChild(h3)
    //Div parent element practice
    const div2 = document.createElement("div")
    div2.style.cssText = "border: black; background: pink;"
        //child
        const h1 = document.createElement("h1")
        h1.textContent = "I'm in a div"
        div2.appendChild(h1)
        //child
        const paragraph2 = document.createElement("p")
        paragraph2.textContent = "ME TOO!"
        div2.appendChild(paragraph2)
    //Append Div parent after children appended
    container.appendChild(div2)


//[EVENTS]
    //Reuse function
    function alertFunction() {
        alert("Hello World")
    }

    //Event Method 2: reference *see HTML*
        //NOTE; limited as DOM element can only have one "onclick" property
    const btn = document.querySelector('#btn')
    btn.onclick = alertFunction()
    //Event Method 3: reference *see HTML*
        //NOTE; allows multiple event listeners if necessary
    const btn2 = document.querySelector('#btn2')
    btn2.addEventListener('click', alertFunction)
    btn2.addEventListener('click', function (e) {   //This is a callback to function addEventListener
        console.log(e)                              //Pass parameter to access more information
        //can set style within;     e.target.style.background = 'blue'
    })

    //SelectorAll and .forEach method 
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
        });
    });