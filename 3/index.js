"use strict";

// Используйте относительные пути для подключения.
// У вас нет на странице add элемента reviewList, ошибка будет в коде.
// reviewBtn нет на странице view, тоже ошибка будет.
// Для каждой страницы создавайте свой js-файл, либо нужно чтоб код отрабатывался верный для каждой страницы.

const product = document.querySelector('.product');
const review = document.querySelector('.review');
const reviewBtn = document.querySelector('.reviewBtn');
const reviewList = document.querySelector('.reviewList');

let productList = JSON.parse(localStorage.getItem('productList')) || [];

const updateProductList = () => {
  reviewList.innerHTML = '';
  productList.forEach(element => {
    const productItem = document.createElement('li');
    productItem.textContent = element;
    reviewList.append(productItem);
    localStorage.setItem('productList', JSON.stringify(productList));
  });
}

reviewBtn.addEventListener('click', () => {
  const newItemProduct = product.value.trim();
  const newItemReview = review.value.trim();

  if (newItemProduct !== '' && newItemReview !== '') {
    productList.push(newItemProduct);
    product.value = '';
    productList.push(newItemReview);
    review.value = '';
    updateProductList();
  }
});

updateProductList();