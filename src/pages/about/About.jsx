// styles
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles["about__heading"]}>About us</h1>
      <hr className={styles["about__hr"]} />
      <p className={styles["about__content"]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        harum iusto officia corrupti commodi incidunt quaerat rerum fugit
        architecto sequi quisquam, fuga suscipit placeat sit neque excepturi
        tempore ratione beatae?
      </p>
      <h4
        className={`${styles["about__heading"]} ${styles["about__heading--sub"]}`}
      >
        Who we are
      </h4>
      <p className={styles["about__paragraph"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic
        dolores voluptatem delectus optio, eligendi eos dolore, nam, accusamus
        tenetur voluptatibus veniam maiores doloremque ullam beatae nemo dolor
        magnam harum repudiandae esse temporibus iure. Ipsa temporibus
        voluptates voluptate officiis veritatis deserunt odit aliquam vitae
        labore sunt neque, dolores reiciendis officia inventore sapiente illum
        magni possimus, adipisci eligendi. Placeat illum debitis pariatur
        perspiciatis, deleniti porro dolor, dolorem excepturi animi, fugit
        voluptate iste. Culpa necessitatibus error nulla, possimus vitae eum
        commodi fuga impedit ab sint dignissimos voluptatum magnam, fugit
        voluptatibus expedita natus nam cumque, esse quibusdam quas earum
        itaque. Fugit, beatae quaerat?
      </p>
      <p className={styles["about__paragraph"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic
        dolores voluptatem delectus optio, eligendi eos dolore, nam, accusamus
        tenetur voluptatibus veniam maiores doloremque ullam beatae nemo dolor
        magnam harum repudiandae esse temporibus iure. Ipsa temporibus
        voluptates voluptate officiis veritatis deserunt odit aliquam vitae
        labore sunt neque, dolores reiciendis officia inventore sapiente illum
        magni possimus, adipisci eligendi. Placeat illum debitis pariatur
        perspiciatis, deleniti porro dolor, dolorem excepturi animi, fugit
        voluptate iste. Culpa necessitatibus error nulla, possimus vitae eum
        commodi fuga impedit ab sint dignissimos voluptatum magnam, fugit
        voluptatibus expedita natus nam cumque, esse quibusdam quas earum
        itaque. Fugit, beatae quaerat?
      </p>
      <p className={styles["about__paragraph"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic
        dolores voluptatem delectus optio, eligendi eos dolore, nam, accusamus
        tenetur voluptatibus veniam maiores doloremque ullam beatae nemo dolor
        magnam harum repudiandae esse temporibus iure. Ipsa temporibus
        voluptates voluptate officiis veritatis deserunt odit aliquam vitae
        labore sunt neque, dolores reiciendis officia inventore sapiente illum
        magni possimus, adipisci eligendi. Placeat illum debitis pariatur
        perspiciatis, deleniti porro dolor, dolorem excepturi animi, fugit
        voluptate iste. Culpa necessitatibus error nulla, possimus vitae eum
        commodi fuga impedit ab sint dignissimos voluptatum magnam, fugit
        voluptatibus expedita natus nam cumque, esse quibusdam quas earum
        itaque. Fugit, beatae quaerat?
      </p>
      <p className={styles["about__paragraph"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic
        dolores voluptatem delectus optio, eligendi eos dolore, nam, accusamus
        tenetur voluptatibus veniam maiores doloremque ullam beatae nemo dolor
        magnam harum repudiandae esse temporibus iure. Ipsa temporibus
        voluptates voluptate officiis veritatis deserunt odit aliquam vitae
        labore sunt neque, dolores reiciendis officia inventore sapiente illum
        magni possimus, adipisci eligendi. Placeat illum debitis pariatur
        perspiciatis, deleniti porro dolor, dolorem excepturi animi, fugit
        voluptate iste. Culpa necessitatibus error nulla, possimus vitae eum
        commodi fuga impedit ab sint dignissimos voluptatum magnam, fugit
        voluptatibus expedita natus nam cumque, esse quibusdam quas earum
        itaque. Fugit, beatae quaerat?
      </p>
    </div>
  );
};

export default About;
