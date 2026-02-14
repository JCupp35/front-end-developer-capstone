import greekSalad from '../assets/greek-salad.png';
import bruchetta from '../assets/bruchetta.png';
import lemonDessert from '../assets/lemon-dessert.png';

const specialsData = [
  {
    id: 'greek-salad',
    title: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: greekSalad,
    imageAlt: 'Greek salad special.',
  },
  {
    id: 'bruchetta',
    title: 'Bruchetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: bruchetta,
    imageAlt: 'Bruchetta special.',
  },
  {
    id: 'lemon-dessert',
    title: 'Lemon Dessert',
    price: '$5.00',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemonDessert,
    imageAlt: 'Lemon dessert special.',
  },
];

export default specialsData;
