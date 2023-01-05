let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

value.textContent = count;

btns.forEach(function (btn) {
  btn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')) {
      count--;
    } else if(styles.contains('reset')) {
      count = 0;
    } else {
      count++
    }

    if(count > 0) {
      value.style.color = "green";
    }
     if(count < 0) {
      value.style.color = "red";
    }
    if(count == 0) {
      value.style.color = "hsl(205, 86%, 17%"
    }

    value.textContent = count;
  })
});


