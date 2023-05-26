const formEL = document.forms.feedBack;

const handleSubmit = (event) => {
  event.preventDefault;

  const formData = new FormData(formEL);
  alert("hii");
};

formEL.addEventListener("submit", handleSubmit);
