function convert(){
    const pkr = document.getElementById('inp').value
    const dollar = pkr * 214
    const para = document.getElementById('para')
    para.innerHTML = `${dollar} PKR`
}