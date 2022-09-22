document.getElementById('inquiry').name = 'Subject';
document.getElementById('suggestion').name = 'Subject';
document.getElementById('other').name = 'Subject';
const othertext = document.getElementById('othertext');
function handleRadioClick() {
  if (document.getElementById('other').checked) {
    othertext.style.display = 'block';
    othertext.setAttribute("required","");
    document.getElementById('othertext').name = 'Subject';
  } else {
    othertext.style.display = 'none';
    othertext.removeAttribute("required");
    document.getElementById('othertext').value = "";
    document.getElementById('othertext').name = '';
  }
}
const radioButtons = document.querySelectorAll('input[name="Subject"]');
radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick);
});
const forms = document.querySelectorAll('div.h-captcha');
forms.forEach(form => {
  const formParentElement = form.parentElement;
  formParentElement.addEventListener("submit", e => {
    if (hcaptcha.getResponse() === '') {
      e.preventDefault();
      alert('Please complete the captcha');
    }
  }, false)
});
