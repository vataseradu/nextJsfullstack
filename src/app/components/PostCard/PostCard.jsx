import Image from "next/image"
import styles from "./PostCard.module.css"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/17950555/pexels-photo-17950555/free-photo-of-palm-tree-near-buildings-walls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
      </div>
      <span className={styles.date}>01.02.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente unde illum, veritatis debitis velit repellat dolor, et, atque voluptatum error labore!</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard