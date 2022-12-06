import { renderList } from "./render-functions.js";

const $name = document.querySelector(".input-name");
const $phone = document.querySelector(".input-phone");
const $type = document.querySelector(".select-type");
const $form = document.querySelector("form");
const $listHtml = document.querySelector(".list");
let contacts = [];

renderList(contacts, $listHtml);
addEventRemove();
addEventEdit();

$form.addEventListener("submit", function (event) {
  event.preventDefault();

  if ($name.value.trim() === "" || $phone.value.trim() === "") {
    return alert("The Name and Phone must not be empty");
  }

  const newContact = {
    id: new Date().getTime().toString(),
    name: $name.value,
    phone: $phone.value,
    type: $type.value,
  };

  contacts.push(newContact);
  renderList(contacts, $listHtml);
  addEventRemove();
  addEventEdit();

  $name.value = "";
  $phone.value = "";
  $type.value = "mobile";
});

function addEventRemove() {
  const removeButtons = document.querySelectorAll(".remove-contact");

  removeButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const idToRemove = event.currentTarget.id;

      contacts = contacts.filter(function (c) {
        return c.id !== idToRemove;
      });

      renderList(contacts, $listHtml);
      addEventRemove();
      addEventEdit();
    });
  });
}

function addEventEdit() {
  const editButtons = document.querySelectorAll(".edit-contact");

  editButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const idToEdit = event.currentTarget.id;

      const contactToEdit = contacts.find(function (c) {
        return c.id === idToEdit;
      });

      $name.value = contactToEdit.name;
      $phone.value = contactToEdit.phone;
      $type.value = contactToEdit.type;

      contacts = contacts.filter(function (c) {
        return c.id !== idToEdit;
      });

      renderList(contacts, $listHtml);
      addEventRemove();
      addEventEdit();
    });
  });
}
