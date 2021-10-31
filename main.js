document.getElementById('input-btn').addEventListener('click', saveInput )
const ulEl = document.getElementById('ul-el') 
let myLeads = []
const inputEl = document.getElementById('input-el')



function saveInput(){
    myLeads.push(inputEl.value)
    renderLead()
    inputEl.value = ''
}

function renderLead(){
    let listItems = ''
    for(let i = 0; i < myLeads.length; i++){
       listItems += `<li>
                        <a href=${myLeads[i]} 
                        target="_blank"> 
                            ${myLeads[i]} 
                        </a>
                    </li>`
    }
    ulEl.innerHTML = listItems
}



