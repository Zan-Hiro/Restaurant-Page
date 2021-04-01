import { content, createHeader} from "./home";

const createPhotoSection = document.createElement('section');

createPhotoSection.id = "photos-section";
createPhotoSection.innerHTML = `
  <img src="https://images.unsplash.com/photo-1603570416072-84068a0f1358?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
  <img src="https://images.unsplash.com/photo-1580376259349-5f4b7db4c39f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
  <img src="https://images.unsplash.com/photo-1603664113651-2f4fde639823?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80" alt="">
  <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="">
  <img src="https://images.unsplash.com/photo-1576169884631-382813d0090e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="">
  <img src="https://images.unsplash.com/photo-1563223771-375783ee91ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="">
  <img src="https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="">
  <img src="https://images.unsplash.com/photo-1579711220373-155ffc441b36?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="">
  <img src="https://images.unsplash.com/photo-1577004686904-1a4f118acf61?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80" alt="">
`;

function createPhotosPage() {
  content.innerHTML = "";
  createHeader();
  content.appendChild(createPhotoSection);
}

export  { createPhotosPage};

