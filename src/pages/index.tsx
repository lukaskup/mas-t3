import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";
import { api } from "../utils/api";
import { Dropdown } from "react-bootstrap";

const Home: NextPage = () => {
  const [isOrdersLoading, setOrdersLoading] = useState(true);

  const clearDb = api.data.clearDb.useMutation();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to s19049&apos;s mas project</h1>
      </main>
      <Dropdown style={{ position: "absolute", right: "30px", bottom: "30px" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          db actions
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>fill data</Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              clearDb.mutate();
            }}
          >
            clear db
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Home;