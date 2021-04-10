const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const listEl = document.querySelector('#ingredients');

  const makeElements = options => {
    return options.map(option => {
        const element = document.createElement('li');
        element.textContent = option;
  
        return element
      });
  }

  const el = makeElements(ingredients);
  listEl.append(...el);