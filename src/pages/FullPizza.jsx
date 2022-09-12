import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState('');
  const navigate = useNavigate();

  let { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        let { data } = await axios.get(
          `https://62def0c1976ae7460be54171.mockapi.io/items/${id}`,
        );
        setPizza(data);
      } catch (error) {
        alert('oupsss... We have some problems. You should try again');
        navigate('/')

      }
    };
    fetchPizza()
  }, []);

  if (!pizza) {
    return <div className="container">Загрузка</div>;
  }

  return (
    <div>
      <div className="container">
        <img src={pizza.imageUrl} alt="pizza" />
      </div>
      <div>
        <span>{pizza.name}</span>
      </div>
      <div>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia voluptas consequuntur atque
          vitae repellendus praesentium quaerat aspernatur aliquid aperiam accusamus error non eaque
          consequatur magnam saepe maiores, maxime ex eos.
        </span>
      </div>
    </div>
  );
};

export default FullPizza;
