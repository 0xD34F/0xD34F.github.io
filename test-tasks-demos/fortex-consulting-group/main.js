document.addEventListener('DOMContentLoaded', function() {
  const
    photos = document.querySelector('#photos'),
    selectBySize = document.querySelector('#select-by-size'),
    selectAll = document.querySelector('#select-all'),
    deleteChecked = document.querySelector('#delete-checked'),
    NUM_PHOTOS = 100,
    MAX_PHOTO_SIZE = 1200,
    MIN_PHOTO_SIZE = 200

  const photoSizes = [ {
    value: '',
    label: 'Все размеры',
    limits: null,
  }, {
    value: 'Большой',
    label: 'Большие',
    limits: [ 900, Infinity ],
  }, {
    value: 'Средний',
    label: 'Средние',
    limits: [ 500, 900 ],
  }, {
    value: 'Маленький',
    label: 'Маленькие',
    limits: [ 0, 500 ]
  } ]

  const templates = {
    photoSize: (value, label) => `<div class="dropdown-option" data-value="${value}">${label}</div>`,
    photoSrc: size => `https://picsum.photos/${size}/${size}/?random`,
    photoItem: (src, id) => `<div class="photo"><input type="checkbox" id="${id}" /><label for="${id}"></label><img src="${src}" /></div>`
  }



  deleteCheckedDisabled(true)

  deleteChecked.addEventListener('click', function() {
    [...photos.querySelectorAll('.photo')]
      .filter(n => n.querySelector('input').checked)
      .forEach(n => photos.removeChild(n))

    deleteCheckedDisabled(true)
  })

  selectAll.addEventListener('click', function() {
    photos.querySelectorAll('.photo input').forEach(n => n.checked = this.checked)

    deleteCheckedDisabled()
  })


  selectBySize.querySelector('.dropdown-options').innerHTML = photoSizes.map(n => templates.photoSize(n.value, n.label)).join('')
  selectBySize.querySelector('.dropdown-value').innerHTML = photoSizes[0].label

  selectBySize.addEventListener('click', function(e) {
    if (e.target.classList.contains('dropdown-option')) {
      const
        sizeValue = e.target.getAttribute('data-value'),
        sizeGroup = photoSizes.find(n => n.value === sizeValue)

      photos.querySelectorAll('.photo').forEach(n => {
        const size = n.getAttribute('data-size')
        n.querySelector('input').checked = !sizeGroup.limits || sizeGroup.value === size
      })

      selectBySize.querySelector('.dropdown-value').innerHTML = sizeGroup.label

      deleteCheckedDisabled()
    }
  })


  photos.innerHTML = [...Array(NUM_PHOTOS)]
    .map(() => (Math.random() * (MAX_PHOTO_SIZE - MIN_PHOTO_SIZE) | 0) + MIN_PHOTO_SIZE)
    .map(size => templates.photoSrc(size))
    .map((src, i) => templates.photoItem(src, `photo-${i}`))
    .join('')

  photos.querySelectorAll('.photo img').forEach(n => {
    n.addEventListener('load', e => {
      const
        size = e.target.naturalWidth,
        sizeGroup = photoSizes.find(n => n.limits && n.limits[0] <= size && n.limits[1] >= size)

      e.target.parentNode.setAttribute('data-size', sizeGroup.value)
    })
  })

  photos.addEventListener('click', function(e) {
    if (e.target.tagName === 'INPUT') {
      deleteCheckedDisabled()
    }
  })



  function deleteCheckedDisabled(disabled) {
    if (typeof disabled !== 'boolean') {
      disabled = [...photos.querySelectorAll('.photo input')].every(n => !n.checked)
    }

    deleteChecked.classList[disabled ? 'add' : 'remove']('disabled')
  }
})
