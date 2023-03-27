function resizeModal() {
    const windowHeight = window.innerHeight;
    const headerHeight = document.querySelector('header').offsetHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;
    const modalPadding = 40;
    const modalContentHeight = windowHeight - headerHeight - footerHeight - modalPadding;
    modalContent.style.height = modalContentHeight + 'px';
  }