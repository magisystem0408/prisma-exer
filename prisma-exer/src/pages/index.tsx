import styles from '../styles/Home.module.css'
import {GetServerSideProps} from "next";
import clientPrisma from "../lib/prisma";
import {FC} from "react";

type HomeProps ={
    count: number
}

const Home:FC<HomeProps> =({count})=> {
  return (
    <div className={styles.container}>
        {count}
    </div>
  )
}


export const getServerSideProps: GetServerSideProps<{
    count: number;
}> = async (ctx) => {
    const count = await clientPrisma.user.count();
    const allUser = await clientPrisma.user.findMany()
    const createUser = await clientPrisma.user.create({
        data:{
            name: "masato",
        }
    })
    console.log(createUser)

    return {
        props: {
            count,
        },
    };
};

export default Home