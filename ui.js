const notFound = () => {
  const container = document.querySelector('.searchContainer');
  const search = document.querySelector('.search');

  const alert = document.createElement('div');
  alert.innerText = 'Sorry user is not found';
  alert.className = 'alert alert-danger';

  container.insertBefore(alert, search);
  setTimeout(() => {
    alert.style.display = 'none';
  }, 3000);
};
