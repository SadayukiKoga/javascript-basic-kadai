const changeText = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    changeText.textContent = 'ボタンをクリックしました';
});