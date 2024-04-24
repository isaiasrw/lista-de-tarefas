document.getElementById('switchTheme').addEventListener('click', function(){
    document.getElementById('body').classList.toggle('light')
})

function addTask(){
    const tarefa = document.getElementById('addTaskInput').value
    const listaDeTarefas = document.getElementById('listaDeTarefas')

    if(tarefa){
        let liNovo = document.createElement('li')
        let botaoRemoveNovo = document.createElement('button')
        let botaoEditNovo = document.createElement('button')

        liNovo.innerText = tarefa

        botaoRemoveNovo.innerText = '✓'
        botaoRemoveNovo.setAttribute('class', 'taskButton')
        botaoRemoveNovo.setAttribute('onclick', 'removeTask(this.parentNode)')

        botaoEditNovo.innerText = '✎'
        botaoEditNovo.setAttribute('class', 'editButton')
        botaoEditNovo.setAttribute('onclick', 'editTask(this.parentNode)')

        liNovo.appendChild(botaoEditNovo)
        liNovo.appendChild(botaoRemoveNovo)
        listaDeTarefas.appendChild(liNovo)
    } else {
        alert('Digite uma tarefa para ser adicionada.')
    }
}

function removeTask(liElement){
    const listaDeTarefas = document.getElementById('listaDeTarefas')
    listaDeTarefas.removeChild(liElement)
}

function editTask(liElement){
    const newTask = prompt('Edite sua tarefa no campo abaixo:')
    if(newTask){
        liElement.firstChild.textContent = newTask
    } else {
    }
}