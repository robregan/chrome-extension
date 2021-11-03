document.getElementById('input-btn').addEventListener('click', saveInput )
const ulEl = document.getElementById('ul-el') 
let myLeads = []
const inputEl = document.getElementById('input-el')
const deleteBtn = document.getElementById('delete-btn').addEventListener('dblclick', deleteLeads)
const tabBtn = document.getElementById('tab-btn').addEventListener('click', saveTab)

const leadsFromLocalStorage = JSON.parse( localStorage.getItem('myLeads') )

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function saveTab(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads) )
        render(myLeads)
    })
}

function deleteLeads(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
}

function saveInput(){
    myLeads.push(inputEl.value)
    localStorage.setItem('myLeads', JSON.stringify(myLeads) )

    inputEl.value = ''
    render(myLeads)
}

function render(arr){
    let listItems = ''
    for(let i = 0; i < arr.length; i++){
       listItems += `<li>
                        <a href=${arr[i]} 
                        target="_blank"> 
                            ${arr[i]} 
                        </a>
                    </li>`
    }
    ulEl.innerHTML = listItems
}



