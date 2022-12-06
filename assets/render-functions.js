const contactListItem = (contact) => {
  return `
<li class="list-item">
  <div class="card-container">
    <figure class="avatar">
      <img src="./assets/avatar.png" alt="" class="img-avatar" />
    </figure>
    <div class="info">
      <h3>${contact.name}</h3>
      <div>
        <p>${contact.type}</p>
        <p>${contact.phone}</p>
      </div>
    </div>
    <div class="actions">
      <button class="edit-contact" id="${contact.id}">
        <i class="fa-solid fa-pen"></i>
      </button>
      <button class="remove-contact" id="${contact.id}">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </div>
</li>`;
};

export function renderList(contacts, $list){
  const list = contacts.map((c) => {
    return contactListItem(c)
  })
  $list.innerHTML = list.join('\n')
}
