// import Album from './Components/Album';
import './App.css';
// import UserProfile from './Components/UserProfile';
import Order from './Components/Order';

// const album01 = {
//   image:
//     'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
//   title: 'Mylo Xyloto',
//   releaseDate: {
//     year: '2011',
//     month: '10',
//     day: '24',
//   },
//   others: {
//     recordCompany: 'Capitol, Parlophone',
//     formats: 'CD, digital',
//   },
// };

// const album02 = {
//   image:
//     'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
//   title: 'Ghost Stories',
//   releaseDate: {
//     year: '2014',
//     month: '05',
//     day: '16',
//   },
//   others: {
//     recordCompany: 'Parlophone',
//     formats: 'CD, digital',
//   },
// };

// const joao = {
//   id: 102,
//   name: 'João',
//   email: 'joao@gmail.com',
//   avatar:
//     'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png',
// };

// const amelia = {
//   id: 77,
//   name: 'Amélia',
//   email: 'amelia@gmail.com',
//   avatar:
//     'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png',
// };

const orders = [
  {
    id: 102,
    user: 'cena@gmail.com',
    product: 'Razer Headphone',
    price: {
      value: 99.99,
      currency: 'dollars',
    },
  },

  {
    id: 77,
    user: 'cena@gmail.com',
    product: 'Monster 500mL',
    price: {
      value: 9.99,
      currency: 'dollars',
    },
  },
];

const test = ['um', 'dois', 'tres', 'quetr']

function App() {
  return (
    <div className='App'>
      <h1>Recent orders</h1>
      {orders.map((elem, index) => (
        <Order order={elem} index={index} />
      ))}
      {test}
    </div>
  );
}

export default App;
