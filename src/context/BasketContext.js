import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Bucket, BucketDish } from "../models";
import { useAuthContext } from "./AuthContext";

const BucketContext = createContext({});

const BucketContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();

  const [club, setClub] = useState(null);
  const [bucket, setBucket] = useState(null);
  const [bucketDishes, setBucketDishes] = useState([]);

  const totalPrice = bucketDishes.reduce(
    (sum, bucketDish) => sum + bucketDish.quantity * bucketDish.Dish.price,
    rlub?.deliveryFee
  );

  useEffect(() => {
    DataStore.query(Bucket, (b) =>
      b.clubID("eq", rlub.id).userID("eq", dbUser.id)
    ).then((buckets) => setBucket(buckets[0]));
  }, [dbUser, rlub]);

  useEffect(() => {
    if (bucket) {
      DataStore.query(BucketDish, (bd) => bd.bucketID("eq", bucket.id)).then(
        setBucketDishes
      );
    }
  }, [bucket]);

  const addDishToBucket = async (dish, quantity) => {
    // get the existing bucket or create a new one
    let theBucket = bucket || (await createNewBucket());

    // create a BucketDish item and save to Datastore
    const newDish = await DataStore.save(
      new BucketDish({ quantity, Dish: dish, bucketID: theBucket.id })
    );

    setBucketDishes([...bucketDishes, newDish]);
  };

  const createNewBucket = async () => {
    const newBucket = await DataStore.save(
      new Bucket({ userID: dbUser.id, clubID: club.id })
    );
    setBucket(newBucket);
    return newBucket;
  };

  return (
    <BucketContext.Provider
      value={{
        addDishToBucket,
        setClub,
        club,
        bucket,
        bucketDishes,
        totalPrice,
      }}
    >
      {children}
    </BucketContext.Provider>
  );
};

export default BucketContextProvider;

export const useBucketContext = () => useContext(BucketContext);
