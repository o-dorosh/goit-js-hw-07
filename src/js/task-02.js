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
    const els = options.map(option => {
        const element = document.createElement('li');
        element.textContent = option;
  
        return element
      });
  
      return els;
  }

  const el = makeElements(ingredients);
  listEl.append(...el);