import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PizzaBlock } from "../../components";
import styles from "./FullPizza.module.scss";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    name: string;
    price: number[];
    types: number[];
    id: string;
    sizes: number[];
  }>();
  const navigate = useNavigate();

  let { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        let { data } = await axios.get(
          `https://62def0c1976ae7460be54171.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        alert("oupsss... We have some problems. You should try again");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.div1}>
        <PizzaBlock {...pizza} />
      </div>
      <div className={styles.div2}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure cumque
          eum blanditiis officia fuga consectetur dolorum, animi dolorem, saepe
          earum dignissimos, laborum ratione porro. Consequuntur sit quibusdam
          neque in officiis!
        </p>
      </div>
    </div>
  );
};

export default FullPizza;
