function buttonClicked() {
    let line = document.getElementById('parallel-line');
    line.classList.add('red')
}
document.getElementById('btn').addEventListener("click", buttonClicked);