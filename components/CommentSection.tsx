import styles from './CommentSection.module.css';

export default function CommentSection() {
  return (
    <section className={styles.commentSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Leave a Reply</h2>
      </div>
      
      <p className={styles.disclaimer}>
        Your email address will not be published. Required fields are marked *
      </p>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <textarea 
            className={styles.textarea} 
            placeholder="Comment *" 
            required
            rows={8}
          ></textarea>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="Name *" 
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input 
              type="email" 
              className={styles.input} 
              placeholder="Email *" 
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <input 
            type="text" 
            className={styles.input} 
            placeholder="Website" 
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          POST COMMENT
        </button>
      </form>
    </section>
  );
}
