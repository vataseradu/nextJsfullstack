import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = async () => {
  
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/17950555/pexels-photo-17950555/free-photo-of-palm-tree-near-buildings-walls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
        </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
        <Image src="https://images.pexels.com/photos/17950555/pexels-photo-17950555/free-photo-of-palm-tree-near-buildings-walls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={50} height={50} className={styles.img} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Vatase Radu</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.03.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, neque. Ipsa maxime eaque perferendis alias animi ducimus rerum minus ut similique. Aperiam accusantium rerum laboriosam reiciendis perspiciatis nihil distinctio neque?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
